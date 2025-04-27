# solana-coding-bootcamp
![Solana Coding Bootcamp](./images/solana_banner.jpg)

## Description

This bootcamp is a full introduction to blockchain, smart contracts, and full stack web3 development on Solana. Going through every lesson should bring you zero to hero on blockchain development and get you building production applications on Solana.

Includes in this repo are the solutions for 13 projects provided in the videos.

Tech Stack: Next.js, Tailwind, Anchor, Rust

## Videos
* https://www.youtube.com/watch?v=amAq-WHAFs8
* https://www.youtube.com/watch?v=HOdYZSe1uhE

## Environment Setup
Environment setup can be done by following the steps outlined in this site:
https://www.anchor-lang.com/docs/installation

### 1. Install Rust
* [Rust Documentation](https://doc.rust-lang.org/stable/book/)

### 2. Install Solana CLI
I had issues installing Solana CLI on Windows so I had to follow these steps:
   
Source: https://stackoverflow.com/questions/71654323/unable-to-install-solana-tool-suite-windows

1. Visit https://github.com/solana-labs/solana/releases to see which release version has a copy of `solana-install-init-x86_64-pc-windows-msvc.exe`.  At time of this writing, it is Release v1.18.26
2. Open Terminal in Administrator Mode
3. Run (notice version matches one found in step 1) `curl https://release.solana.com/v1.18.26/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs`
4. Change directory to `C:\solana-install-tmp`
5. Run `solana-install-init.exe v1.18.26`  Again notice the version matches the one in Step 1.
6. Press `Enter` after installation is completed.
7. To check if installed correctly, type `solana --version` and you should see output.

### 3. Install Anchor

### 4. Create Solana Project
1. Run `npx create-solana-dapp` 
2. This wizard will ask you a series of questions in regards to your application.

### 5. Running project locally
1. Change directory into project folder.
2. Run `npm i`
3. Run `npm run dev` to launch frontend
4. Run `solana-test-validator`to run validator locally
   1. Need to open up Power Shell in administrator mode
   2. Run `wsl --install`
   3. Run `curl --proto '=https' --tlsv1.2 -sSfL https://solana-install.solana.workers.dev | bash`
   4. Restart terminal
5. You can check if transactions locally on soal