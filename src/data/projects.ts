import type { ImageMetadata } from 'astro';
import decompDevHome from '../assets/decomp.dev-home.png';
import decompDevPrime from '../assets/decomp.dev-prime.png';
import screenSymbols from '../assets/screen-symbols.png';
import screenDiff from '../assets/screen-diff.png';
import ghidraPanelHome from '../assets/ghidra-panel-home.png';
import ghidraPanelRepo from '../assets/ghidra-panel-repo.png';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  href: string;
  rel?: string;
}

export interface Project {
  name: string;
  url: string;
  repo: string;
  desc: string;
  langs: { name: string; color: string }[];
  body: string;
  meta?: string;
  images?: ProjectImage[];
}

const LANG = {
  Rust: { name: 'Rust', color: '#dea584' },
  TypeScript: { name: 'TypeScript', color: '#3178c6' },
  Cpp: { name: 'C++', color: '#f34b7d' },
  Go: { name: 'Go', color: '#00add8' },
  Java: { name: 'Java', color: '#b07219' },
} as const;

export const projects: Project[] = [
  {
    name: 'objdiff',
    url: 'https://github.com/encounter/objdiff',
    repo: 'encounter/objdiff',
    desc: 'Local diffing tool for decompilation projects',
    langs: [LANG.Rust, LANG.TypeScript],
    body: `
      <p><code>objdiff</code> compares object files across functions and data. It supports ARM, ARM64, MIPS, PowerPC, SuperH, and x86(-64), and provides a GUI, TUI, and JSON output for integration with other tools and agentic workflows.</p>
      <p>The core diffing engine compiles to WASM and runs as a <a href="https://github.com/encounter/objdiff-web">web frontend</a> in <a href="https://decomp.me">decomp.me</a> and as a <a href="https://marketplace.visualstudio.com/items?itemName=decomp-dev.objdiff">VS Code extension</a>. Its progress reporting system powers <a href="https://decomp.dev">decomp.dev</a>.</p>
      <p class="project-meta">Inspired by <a href="https://decomp.me">decomp.me</a> and <a href="https://github.com/simonlindholm/asm-differ">asm-differ</a>.</p>
    `,
    images: [
      {
        src: screenSymbols,
        alt: 'Symbol Screenshot',
        href: 'https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-symbols.png',
      },
      {
        src: screenDiff,
        alt: 'Diff Screenshot',
        href: 'https://raw.githubusercontent.com/encounter/objdiff/refs/heads/main/assets/screen-diff.png',
      },
    ],
  },
  {
    name: 'decomp.dev',
    url: 'https://decomp.dev',
    repo: 'encounter/decomp.dev',
    desc: 'Progress hub for decompilation projects',
    langs: [LANG.Rust],
    body: `
      <p><code>decomp.dev</code> tracks progress for more than 80 decompilation projects. With data driven by <code>objdiff</code>'s progress reports, it provides granular information down to individual translation units and functions, plus a tree view for exploring project structure. Projects can categorize units, track multiple game versions, and navigate full commit-by-commit history.</p>
      <p>All of this information is also exposed through its API, along with a badge system for embedding live progress in project <code>README</code>s.</p>
      <p class="project-meta">Written in Rust with Axum.</p>
    `,
    images: [
      {
        src: decompDevHome,
        alt: 'decomp.dev',
        href: 'https://decomp.dev',
        rel: 'noopener',
      },
      {
        src: decompDevPrime,
        alt: 'Metroid Prime on decomp.dev',
        href: 'https://decomp.dev/PrimeDecomp/prime',
        rel: 'noopener',
      },
    ],
  },
  {
    name: 'wibo',
    url: 'https://github.com/decompals/wibo',
    repo: 'decompals/wibo',
    desc: 'Lightweight Win32 binary loader for Linux and macOS',
    langs: [LANG.Cpp],
    body: `
      <p><code>wibo</code> runs 32-bit Windows command-line tools with minimal overhead. It implements a substantial portion of the Win32 API: file I/O, threading, heap management, DLL loading, TLS, and async I/O with platform-specific backends (io_uring, epoll, kqueue). On 64-bit hosts, it constrains the guest address space to the lower 2GB and bridges calling conventions with generated trampolines. Runs on macOS under Rosetta 2.</p>
    `,
    meta: 'Used by <a href="https://decomp.me">decomp.me</a> to run Windows compilers in containers.',
  },
  {
    name: 'decomp-toolkit',
    url: 'https://github.com/encounter/decomp-toolkit',
    repo: 'encounter/decomp-toolkit',
    desc: 'PowerPC static analyzer, binary delinker, and GameCube/Wii swiss army knife',
    langs: [LANG.Rust],
    body: `
      <p><code>decomp-toolkit</code> takes a compiled binary and produces fully relinkable objects. Its analyzer handles function and object boundary detection, signature analysis, and rebuilding relocations, all with minimal configuration. <a href="https://github.com/encounter/dtk-template">dtk-template</a> is a project template and build system built on top of decomp-toolkit.</p>
      <p>Its approach to matching decompilation has since been applied to other platforms, including <a href="https://github.com/AetiasHax/ds-decomp">ds-decomp</a> for Nintendo DS and <a href="https://github.com/rjkiv/jeff">jeff</a> for Xbox 360.</p>
    `,
    meta: 'Used by more than 50 decompilation projects, including several now-complete ones like <a href="https://github.com/zeldaret/tp">The Legend of Zelda: Twilight Princess</a> and <a href="https://github.com/mariopartyrd/marioparty4">Mario Party 4</a>.',
  },
  {
    name: 'nod',
    url: 'https://github.com/encounter/nod',
    repo: 'encounter/nod',
    desc: 'GameCube and Wii disc image Rust library and CLI tool',
    langs: [LANG.Rust],
    body: `
      <p><code>nod</code> supports reading and converting all GameCube and Wii disc image formats, with a simple and performant API. Open any disc image and get a <code>Read + Seek + BufRead</code> handle. Converting to ISO is just reading from that handle and writing to a file, regardless of the source format. Open a partition and get the same interface, transparently handling Wii encryption and hashing.</p>
      <p>Reading and writing are both multithreaded, and <code>nod</code> produces smaller disc images faster than both Dolphin and NKit v2. C bindings are available for FFI.</p>
    `,
    meta: 'Used by <a href="https://github.com/mq1/TinyWiiBackupManager">TinyWiiBackupManager</a>.',
  },
  {
    name: 'powerpc-rs',
    url: 'https://github.com/encounter/powerpc-rs',
    repo: 'encounter/powerpc-rs',
    desc: 'PowerPC disassembler and assembler in Rust',
    langs: [LANG.Rust],
    body: `
      <p><code>powerpc-rs</code> is driven by a declarative instruction set definition that is compiled into Rust at build time, similar to LLVM's TableGen. It supports the full PowerPC instruction set along with Gekko/Broadway paired singles (GameCube/Wii) and Xenon VMX128 (Xbox 360) extensions.</p>
      <p>The disassembler has been fuzzed over all 4.29 billion possible 32-bit instruction values and runs at ~275M instructions per second.</p>
    `,
    meta: 'Used as the PowerPC backend for objdiff and decomp-toolkit.',
  },
  {
    name: 'ghidra-panel',
    url: 'https://github.com/encounter/ghidra-panel',
    repo: 'encounter/ghidra-panel',
    desc: 'Self-service portal for managing access to shared Ghidra repositories',
    langs: [LANG.Go, LANG.Java],
    body: `
      <p><code>ghidra-panel</code> integrates with Ghidra Server through an in-process gRPC plugin, allowing repository administrators to manage users and permissions. Users authenticate with Discord and can request repository access, sending a notification with a one-click approval link for admins.</p>
    `,
    meta: 'Powers the collaboration infrastructure on <a href="https://decomp.dev">decomp.dev</a>.',
    images: [
      {
        src: ghidraPanelHome,
        alt: 'ghidra-panel home',
        href: 'https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/home.png',
      },
      {
        src: ghidraPanelRepo,
        alt: 'ghidra-panel repository view',
        href: 'https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/repo.png',
      },
    ],
  },
  {
    name: 'aurora',
    url: 'https://github.com/encounter/aurora',
    repo: 'encounter/aurora',
    desc: 'Source-level GameCube & Wii compatibility layer for use with decompilation projects',
    langs: [LANG.Cpp],
    body: `
      <p>Aurora reimplements the GX API, translating the calls to native graphics backends like Vulkan, Metal, D3D12, and WebGPU.</p>
    `,
  },
  {
    name: 'metaforce',
    url: 'https://github.com/AxioDL/metaforce',
    repo: 'AxioDL/metaforce',
    desc: 'Native reimplementation of the Metroid Prime engine',
    langs: [LANG.Cpp],
    body: `
      <p>Metaforce (formerly URDE) started as a passion project reimplementing parts of the Metroid Prime engine, and eventually transformed into a nearly-complete non-matching decompilation.</p>
      <p><a href="https://axiodl.com">Project website</a></p>
    `,
    meta: 'Currently on hiatus as the <a href="https://github.com/PrimeDecomp/prime">matching decompilation of Metroid Prime</a> progresses.',
  },
];
