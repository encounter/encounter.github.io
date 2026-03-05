---
order: 4
name: 'decomp-toolkit'
url: 'https://github.com/encounter/decomp-toolkit'
repo: 'encounter/decomp-toolkit'
desc: 'PowerPC static analyzer, binary delinker, and GameCube/Wii swiss army knife'
langs:
  - name: 'Rust'
    color: '#dea584'
meta: 'Used by more than 50 decompilation projects, including several now-complete ones like [The Legend of Zelda: Twilight Princess](https://github.com/zeldaret/tp) and [Mario Party 4](https://github.com/mariopartyrd/marioparty4).'
---

`decomp-toolkit` takes a compiled binary and produces fully relinkable objects. Its analyzer handles function and object boundary detection, signature analysis, and rebuilding relocations, all with minimal configuration. [dtk-template](https://github.com/encounter/dtk-template) is a project template and build system built on top of decomp-toolkit.

Its approach to matching decompilation has since been applied to other platforms, including [ds-decomp](https://github.com/AetiasHax/ds-decomp) for Nintendo DS and [jeff](https://github.com/rjkiv/jeff) for Xbox 360.
