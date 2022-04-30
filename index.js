const { ethers } = require("ethers"); // use: 'yarn add browserify' to be able to use ethers

async function connect() { // Connect Metamask 
    if (typeof window.ethereum !== "undefined") { // check that Metamask exists
        await window.ethereum.request({ method: "eth_requestAccounts" });
    }
}

async function read() { // used to read from the Blockchain
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Address from SimpleStorage.sol deployment done when local blockchain was executed (you can get any other contract)
    const abi = [  // ABI from SmarContract Artifacts || best pratice -> include in a file and import it
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "addPerson",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameToFavoriteNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "people",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "favoriteNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];

      // Now: we connect to the Blockchain and execute the transaction
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(); // signer: MetaMask account
      const contract = new ethers.Contract(contractAddress, abi, signer); // instantiate Contract with connected MetaMask account
      const value = await contract.retrieve(); // returns stored value
      console.log(value.toString());
}

async function store() { // Store function from hardhat-simple-storage -> SimpleStorage.sol
   if (typeof window.ethereum !== "undefined") {
    // we need -> ADDRESS, ABI
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Address from SimpleStorage.sol deployment done when local blockchain was executed (you can get any other contract)
    const abi = [  // ABI from SmarContract Artifacts || best pratice -> include in a file and import it
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "addPerson",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameToFavoriteNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "people",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "favoriteNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];

      // Now: we connect to the Blockchain and execute the transaction
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(); // signer: MetaMask account
      const contract = new ethers.Contract(contractAddress, abi, signer); // instantiate Contract with connected MetaMask account

      // execute transaction NOW
      try{
        await contract.store(77);
      }catch (error) {
        console.log(error);
      }
   }
}

module.exports = { // export functions
    connect,
    store,
    read,
};
