---
order: 5
name: 'nod'
url: 'https://github.com/encounter/nod'
repo: 'encounter/nod'
desc: 'GameCube and Wii disc image library and CLI tool'
langs:
  - name: 'Rust'
    color: '#dea584'
meta: 'Used by [TinyWiiBackupManager](https://github.com/mq1/TinyWiiBackupManager).'
---

`nod` supports reading and converting all GameCube and Wii disc image formats, with a simple and performant API. Open any disc image and get a `Read + Seek + BufRead` handle. Converting to ISO is just reading from that handle and writing to a file, regardless of the source format. Open a partition and get the same interface, transparently handling Wii encryption and hashing.

Reading and writing are multithreaded, and `nod` produces smaller disc images faster than both Dolphin and NKit v2. C bindings are available for FFI.
