---
order: 1
name: 'objdiff'
url: 'https://github.com/encounter/objdiff'
repo: 'encounter/objdiff'
desc: 'Diffing tool for decompilation projects'
langs:
  - name: 'Rust'
    color: '#dea584'
  - name: 'TypeScript'
    color: '#3178c6'
images:
  - src: '../../assets/screen-symbols.png'
    alt: 'Symbol Screenshot'
    href: 'https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-symbols.png'
  - src: '../../assets/screen-diff.png'
    alt: 'Diff Screenshot'
    href: 'https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-diff.png'
---

`objdiff` compares object files across functions and data. It supports ARM, ARM64, MIPS, PowerPC, SuperH, and x86(-64). It provides a GUI, TUI, and JSON output for integration with other tools and agentic workflows.

The core diffing engine compiles to WASM and runs as a [web frontend](https://github.com/encounter/objdiff-web) in [decomp.me](https://decomp.me) and as a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=decomp-dev.objdiff). Its progress reporting system powers [decomp.dev](https://decomp.dev).
