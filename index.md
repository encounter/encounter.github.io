---
layout: page
title: About
---

I enjoy working on GameCube & Wii game reverse engineering projects, with a focus on tooling.

[GitHub](https://github.com/encounter) • [Discord](https://discord.com/users/130490603749376000)

-----------------

# Projects

### [decomp-toolkit](https://github.com/encounter/decomp-toolkit)

A GameCube & Wii decompilation toolkit.

decomp-toolkit provides useful utilities for developers and functions as a core part of a decompilation project's build system. It provides advanced analysis and other features that simplify GC/Wii decompilation.

For new projects, [dtk-template](https://github.com/encounter/dtk-template) provides a project structure and build system utilizing decomp-toolkit under the hood.

### [objdiff](https://github.com/encounter/objdiff)

A local diffing tool for decompilation projects. Inspired by [decomp.me](https://decomp.me) and [asm-differ](https://github.com/simonlindholm/asm-differ).

objdiff is designed to provide a high-level view of the entire project and fast iteration while matching.

<a href="https://github.com/encounter/objdiff/blob/main/assets/screen-symbols.png" target="_blank"><img src="https://raw.githubusercontent.com/encounter/objdiff/main/assets/screen-symbols.png" alt="Symbol Screenshot" style="max-width: 40%;" class="inline"></a>
<a href="https://github.com/encounter/objdiff/blob/main/assets/screen-diff.png" target="_blank"><img src="https://raw.githubusercontent.com/encounter/objdiff/main/assets/screen-diff.png" alt="Diff Screenshot" style="max-width: 40%;" class="inline"></a>

### [aurora](https://github.com/encounter/aurora)

A source-level GameCube & Wii compatibility layer intended for use with decompilation projects.

Aurora reimplements the GX API, translating the calls to native graphics backends like Vulkan, Metal, D3D12, and WebGPU.

### [metaforce](https://github.com/AxioDL/metaforce)
[(Project website)](https://axiodl.com)

A native reimplementation of the Metroid Prime engine.

Metaforce (formerly URDE) started as a passion project reimplementing parts of the Metroid Prime engine, and eventually transformed into a nearly-complete non-matching decompilation.

Currently on hiatus as the _matching_ decompilation of Metroid Prime (see below) progresses.

-----------------

# Decompilations

### [Metroid Prime](https://github.com/PrimeDecomp/prime)

<img src="https://img.shields.io/endpoint?label=DOL&amp;url=https%3A%2F%2Fprogress.decomp.club%2Fdata%2Fprime%2FGM8E01_00%2Fdol%2F%3Fmode%3Dshield%26measure%3Dcode" alt="Code Progress" class="inline">

### [Metroid Prime 2: Echoes](https://github.com/PrimeDecomp/echoes)

<img src="https://img.shields.io/endpoint?label=DOL&amp;url=https%3A%2F%2Fprogress.decomp.club%2Fdata%2Fechoes%2FG2ME01%2Fdol%2F%3Fmode%3Dshield%26measure%3Dcode" alt="DOL Progress" class="inline"> <img src="https://img.shields.io/endpoint?label=RELs&amp;url=https%3A%2F%2Fprogress.decomp.club%2Fdata%2Fechoes%2FG2ME01%2Fmodules%2F%3Fmode%3Dshield%26measure%3Dcode" alt="RELs Progress" class="inline">

### [The Legend of Zelda: The Wind Waker](https://github.com/zeldaret/tww)

<img src="https://img.shields.io/endpoint?label=DOL&amp;url=https%3A%2F%2Fprogress.decomp.club%2Fdata%2Ftww%2FGZLE01%2Fdol%2F%3Fmode%3Dshield%26measure%3Dcode" alt="DOL Progress" class="inline"> <img src="https://img.shields.io/endpoint?label=RELs&amp;url=https%3A%2F%2Fprogress.decomp.club%2Fdata%2Ftww%2FGZLE01%2Fmodules%2F%3Fmode%3Dshield%26measure%3Dcode" alt="RELs Progress" class="inline">