---
order: 7
name: 'ghidra-panel'
url: 'https://github.com/encounter/ghidra-panel'
repo: 'encounter/ghidra-panel'
desc: 'Self-service portal for managing access to shared Ghidra repositories'
langs:
  - name: 'Go'
    color: '#00add8'
  - name: 'Java'
    color: '#b07219'
meta: 'Powers the collaboration infrastructure on [decomp.dev](https://ghidra.decomp.dev).'
images:
  - src: '../../assets/ghidra-panel-home.png'
    alt: 'ghidra-panel home'
    href: 'https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/home.png'
  - src: '../../assets/ghidra-panel-repo.png'
    alt: 'ghidra-panel repository view'
    href: 'https://media.githubusercontent.com/media/encounter/ghidra-panel/main/.github/img/repo.png'
---

`ghidra-panel` integrates with Ghidra Server through an in-process gRPC plugin, allowing repository administrators to manage users and permissions. Users authenticate with Discord and can request repository access, sending a notification with a one-click approval link for admins.
