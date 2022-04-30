const { ethers } = require("ethers"); // use: 'yarn add browserify' to be able to use ethers

<<<<<<< HEAD
=======
<script> // JavaScript here
        async function connect() { // Connect Metamask 
            if (typeof window.ethereum !== "undefined") { // check that Metamask exists
                await window.ethereum.request({method: "eth_requestAccounts"}) 
                document.getElementById("connectButton").innerHTML = "Connected"; // Change 'Connect' to 'Connected'
            }
        }
</script>
>>>>>>> e1854ff4b98f081c3227fe50d6485c5eea30d29c
