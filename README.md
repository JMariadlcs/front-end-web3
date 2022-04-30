# Front End Web3

This is a Front-end web3 workshop from Chainlink Hackathon Spring 2022 which is made for connecting front-end and back-end and execute transactions (functions from imported Smart Contract).

To do so, a local Blockchain is executed using [Hardhat simple storage](https://github.com/PatrickAlphaC/hardhat-simple-storage) repo, details are explained below step by step.

## Dependencies and Set-Up
- Install server dependencies:
```bash
yarn add http-server
```
It is possible to work with normal testnets (Rinkeby, Mumbai, etc).

In this case are going to run our own local blockchain to do it faster. 

To do show:

- Install hardhat-simple-storage from Patrick:
```bash
cd ..
git clone https://github.com/PatrickAlphaC/hardhat-simple-storage
cd hardhat-simple-storage
```

- Make local network go alive:
```bash
yarn
yarn hardhat node
```

- We are getting our own JSON-RPC server at http://127.0.0.1:8545/

- Go to Metamask and add 'New Network':
1. Network Name: Hardhat-Localhost
2. New RCP URL: http://127.0.0.1:8545/
3. Chain ID: 31337
4. Currency Symbol: ETH

- Import local MetaMask account:
1. Grab one of the previously generated Private Keys when 'yarn hardhat node' was runned
2. Import Account
3. Paste private key

- Hardhat init:
```bash
npm init -y
npm install --save-dev hardhat
```

- Add .gitignore file containing:
```bash
node_modules
.env
coverage
coverage.json
typechain

#Hardhat files
cache
artifacts
```

- Install some JavaScript packets (to work with ethers):
```bash 
yarn add browserify
yarn add ethers
yarn browserify index.js --standalone bundle -o ./dist/bundle.js
```

- Execute the following command each time you change 'index.js' to reupdate bundle.js
```bash
yarn browserify index.js --standalone bundle -o ./dist/bundle.js
```

## Resources
- [Full-stack-web3-connectors](https://github.com/PatrickAlphaC/full-stack-web3-metamask-connectors): a repo that contains different ways of using web3 connectors.
- [Full stack web3](https://github.com/PatrickAlphaC/html-js-ethers-connect/tree/7fd43da59ff0c6ba4cf2c3dae0395bc6b8df03ad): repor that creates a full web3 page from scratch.
- [Hardhat simple storage](https://github.com/PatrickAlphaC/hardhat-simple-storage): Patricks repo clonned to run our own local Blockchain network and interact with its Smart Contracts.
- [More complex video by Patrick](https://www.youtube.com/watch?v=pdsYCkUWrgQ): Same done here but more complex.