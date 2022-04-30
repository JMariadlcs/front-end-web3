# front-end-web3

- Install dependencies:
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
yarn
yarn hardhat node
```

- We are getting our own JSON-RPC server at http://127.0.0.1:8545/

- Go to Metamask and add 'New Network':
1. Network Name: Hardhat-Localhost
2. New RCP URL: http://127.0.0.1:8545/
3. Chain ID: 31337
4. Currency Symbol: ETH

## Resources
- [Full-stack-web3-connectors](https://github.com/PatrickAlphaC/full-stack-web3-metamask-connectors): a repo that contains different ways of using web3 connectors.
- [Full stack web3](https://github.com/PatrickAlphaC/html-js-ethers-connect/tree/7fd43da59ff0c6ba4cf2c3dae0395bc6b8df03ad): repor that creates a full web3 page from scratch.
- [Hardhat simple storage](https://github.com/PatrickAlphaC/hardhat-simple-storage): Patricks repo clonned to use the Smart Contracts