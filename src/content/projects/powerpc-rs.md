---
order: 6
name: 'powerpc-rs'
url: 'https://github.com/encounter/powerpc-rs'
repo: 'encounter/powerpc-rs'
desc: 'PowerPC disassembler and assembler'
langs:
  - name: 'Rust'
    color: '#dea584'
meta: 'Used as the PowerPC backend for objdiff and decomp-toolkit.'
---

`powerpc-rs` is driven by a declarative instruction set definition that is compiled into Rust at build time, similar to LLVM's TableGen. It supports the full PowerPC instruction set along with Gekko/Broadway paired singles (GameCube/Wii) and Xenon VMX128 (Xbox 360) extensions.

The disassembler has been fuzzed over all 4.29 billion possible 32-bit instruction values and runs at ~275M instructions per second.
