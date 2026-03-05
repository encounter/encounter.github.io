---
order: 3
name: 'wibo'
url: 'https://github.com/decompals/wibo'
repo: 'decompals/wibo'
desc: 'Lightweight Win32 binary loader for Linux and macOS'
langs:
  - name: 'C++'
    color: '#f34b7d'
meta: 'Used by [decomp.me](https://decomp.me) to run containerized Windows compilers.'
---

`wibo` runs 32-bit Windows command-line tools with minimal overhead. It implements a substantial portion of the Win32 API: file I/O, threading, heap management, DLL loading, TLS, and async I/O with platform-specific backends (`io_uring`, `epoll`, `kqueue`).

On 64-bit hosts, it constrains the guest address space to the lower 2GB and bridges calling conventions with generated trampolines. Runs on macOS under Rosetta 2.
