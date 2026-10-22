#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Công cụ tổng hợp mã nguồn Modular (kiểu \input{} trong LaTeX):
Đọc tệp khung `src/main.template.html`, tự động ghép toàn bộ các tệp con
trong `src/` thành tệp `index.html` hoàn chỉnh ở thư mục gốc.
"""
import os
import re

def build_project(
    template_rel="src/main.template.html",
    output_rel="index.html"
):
    root_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(root_dir, template_rel)
    output_path = os.path.join(root_dir, output_rel)
    base_dir = os.path.dirname(template_path)

    with open(template_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(
        r'(?:<!--\s*@input:\s*([^\s]+?)\s*-->|/\*\s*@input:\s*([^\s]+?)\s*\*/)'
    )

    def resolve_includes(text, depth=0):
        if depth > 6:
            return text

        def replacer(match):
            rel_path = match.group(1) or match.group(2)
            full_path = os.path.join(base_dir, rel_path)
            if not os.path.exists(full_path):
                raise FileNotFoundError(f"Không tìm thấy tệp con: {full_path}")
            with open(full_path, "r", encoding="utf-8") as inc:
                sub_content = inc.read()
            return f"\n{sub_content.rstrip()}\n"

        new_text, count = pattern.subn(replacer, text)
        if count > 0:
            return resolve_includes(new_text, depth + 1)
        return new_text

    bundled = resolve_includes(content)
    with open(output_path, "w", encoding="utf-8") as out:
        out.write(bundled)

    lines_count = len(bundled.splitlines())
    size_kb = len(bundled.encode("utf-8")) / 1024
    print(f"[OK] Đã tổng hợp thành công '{output_rel}' ({lines_count:,} dòng, {size_kb:,.1f} KB)!")

if __name__ == "__main__":
    build_project()
