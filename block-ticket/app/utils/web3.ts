// src/utils/web3.ts
import Web3 from "web3";

declare global {
  interface Window {
    ethereum?: any; // Adjust the type based on the actual type of ethereum
    web3?: any; // Adjust the type based on the actual type of web3
  }
}

let web3: Web3 = new Web3();

if (window && window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access");
  }
} else if (window && window.web3) {
  // Legacy dapp browsers...
  web3 = new Web3(window.web3.currentProvider);
} else {
  // Non-dapp browsers...
  console.error(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
}

// Assert that web3 is initialized before exporting
export default web3 as Web3;
