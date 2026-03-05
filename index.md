---
layout: page
title: About
---

I build tools for decompilation and game reverse engineering, with a focus on GameCube and Wii.

<div class="social-links">
<a href="https://github.com/encounter">GitHub</a> <span class="sep">&middot;</span> <a href="https://discord.com/users/130490603749376000">Discord</a>
</div>

# Projects

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot rust"></span>Rust</span><span class="lang"><span class="lang-dot typescript"></span>TypeScript</span></span>

## [objdiff](https://github.com/encounter/objdiff)

<p class="project-desc">Local diffing tool for decompilation projects</p>

`objdiff` compares object files across functions and data. It supports ARM, ARM64, MIPS, PowerPC, SuperH, and x86(-64), and provides a GUI, TUI, and JSON output for integration with other tools and agentic workflows.

The core diffing engine compiles to WASM and runs as a [web frontend](https://github.com/encounter/objdiff-web) in [decomp.me](https://decomp.me) and as a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=decomp-dev.objdiff). Its progress reporting system powers [decomp.dev](https://decomp.dev).

<p class="project-meta">
Inspired by <a href="https://decomp.me">decomp.me</a> and <a href="https://github.com/simonlindholm/asm-differ">asm-differ</a>.
</p>

<div class="project-images">
<a href="https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-symbols.png" target="_blank"><img src="https://raw.githubusercontent.com/encounter/objdiff/main/assets/screen-symbols.png" alt="Symbol Screenshot"></a>
<a href="https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-diff.png" target="_blank"><img src="https://raw.githubusercontent.com/encounter/objdiff/main/assets/screen-diff.png" alt="Diff Screenshot"></a>
</div>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot rust"></span>Rust</span></span>

## [decomp.dev](https://decomp.dev)

<p class="project-desc">Progress hub for decompilation projects</p>

`decomp.dev` tracks progress for more than 80 decompilation projects. With data driven by `objdiff`'s progress reports, it provides granular information down to individual translation units and functions, plus a tree view for exploring project structure. Projects can categorize units, track multiple game versions, and navigate full commit-by-commit history.

All of this information is also exposed through its API, along with a badge system for embedding live progress in project `README`s.

<p class="project-meta">
Written in Rust with Axum.
</p>

<div class="project-images">
<a href="https://decomp.dev" target="_blank" rel="noopener"><img src="assets/decomp.dev-home.png" alt="decomp.dev"></a>
<a href="https://decomp.dev/PrimeDecomp/prime" target="_blank" rel="noopener"><img src="assets/decomp.dev-prime.png" alt="Metroid Prime on decomp.dev"></a>
</div>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot cpp"></span>C++</span></span>

## [wibo](https://github.com/decompals/wibo)

<p class="project-desc">Lightweight Win32 binary loader for Linux and macOS</p>

`wibo` runs 32-bit Windows command-line tools with minimal overhead. It implements a substantial portion of the Win32 API: file I/O, threading, heap management, DLL loading, TLS, and async I/O with platform-specific backends (io_uring, epoll, kqueue). On 64-bit hosts, it constrains the guest address space to the lower 2GB and bridges calling conventions with generated trampolines. Runs on macOS under Rosetta 2.

<p class="project-meta">Used by <a href="https://decomp.me">decomp.me</a> to run Windows compilers in containers.</p>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot rust"></span>Rust</span></span>

## [decomp-toolkit](https://github.com/encounter/decomp-toolkit)

<p class="project-desc">PowerPC static analyzer, binary delinker, and GameCube/Wii swiss army knife</p>

`decomp-toolkit` takes a compiled binary and produces fully relinkable objects. Its analyzer handles function and object boundary detection, signature analysis, and rebuilding relocations, all with minimal configuration. <a href="https://github.com/encounter/dtk-template">dtk-template</a> is a project template and build system built on top of decomp-toolkit.

Its approach to matching decompilation has since been applied to other platforms, including [ds-decomp](https://github.com/AetiasHax/ds-decomp) for Nintendo DS and [jeff](https://github.com/rjkiv/jeff) for Xbox 360.

<p class="project-meta">Used by more than 50 decompilation projects, including several now-complete ones like <a href="https://github.com/zeldaret/tp">The Legend of Zelda: Twilight Princess</a> and <a href="https://github.com/mariopartyrd/marioparty4">Mario Party 4</a>.</p>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot rust"></span>Rust</span></span>

## [nod](https://github.com/encounter/nod)

<p class="project-desc">GameCube and Wii disc image Rust library and CLI tool</p>

`nod` supports reading and converting all GameCube and Wii disc image formats, with a simple and performant API. Open any disc image and get a `Read + Seek + BufRead` handle. Converting to ISO is just reading from that handle and writing to a file, regardless of the source format. Open a partition and get the same interface, transparently handling Wii encryption and hashing.

Reading and writing are both multithreaded, and `nod` produces smaller disc images faster than both Dolphin and NKit v2. C bindings are available for FFI.

<p class="project-meta">Used by <a href="https://github.com/mq1/TinyWiiBackupManager">TinyWiiBackupManager</a>.</p>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot rust"></span>Rust</span></span>

## [powerpc-rs](https://github.com/encounter/powerpc-rs)

<p class="project-desc">PowerPC disassembler and assembler in Rust</p>

`powerpc-rs` is driven by a declarative instruction set definition that is compiled into Rust at build time, similar to LLVM's TableGen. It supports the full PowerPC instruction set along with Gekko/Broadway paired singles (GameCube/Wii) and Xenon VMX128 (Xbox 360) extensions.

The disassembler has been fuzzed over all 4.29 billion possible 32-bit instruction values and runs at ~275M instructions per second.

<p class="project-meta">Used as the PowerPC backend for objdiff and decomp-toolkit.</p>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot go"></span>Go</span><span class="lang"><span class="lang-dot java"></span>Java</span></span>

## [ghidra-panel](https://github.com/encounter/ghidra-panel)

<p class="project-desc">Self-service portal for managing access to shared Ghidra repositories</p>

`ghidra-panel` integrates with Ghidra Server through an in-process gRPC plugin, allowing repository administrators to manage users and permissions. Users authenticate with Discord and can request repository access, sending a notification with a one-click approval link for admins.

<p class="project-meta">Powers the collaboration infrastructure on <a href="https://decomp.dev">decomp.dev</a>.</p>

<div class="project-images">
<a href="https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/home.png" target="_blank"><img src="https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/home.png" alt="ghidra-panel home"></a>
<a href="https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/repo.png" target="_blank"><img src="https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/repo.png" alt="ghidra-panel repository view"></a>
</div>

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot cpp"></span>C++</span></span>

## [aurora](https://github.com/encounter/aurora)

<p class="project-desc">Source-level GameCube & Wii compatibility layer for use with decompilation projects</p>

Aurora reimplements the GX API, translating the calls to native graphics backends like Vulkan, Metal, D3D12, and WebGPU.

</div>

<div class="project" markdown="1">
<span class="project-langs"><span class="lang"><span class="lang-dot cpp"></span>C++</span></span>

## [metaforce](https://github.com/AxioDL/metaforce)

<p class="project-desc">Native reimplementation of the Metroid Prime engine</p>

Metaforce (formerly URDE) started as a passion project reimplementing parts of the Metroid Prime engine, and eventually transformed into a nearly-complete non-matching decompilation.

[Project website](https://axiodl.com)

<p class="project-meta">Currently on hiatus as the <a href="https://github.com/PrimeDecomp/prime">matching decompilation of Metroid Prime</a> progresses.</p>

</div>
