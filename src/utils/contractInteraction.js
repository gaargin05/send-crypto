import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config";
import contractAbi from "./Transactions.json"; // Correct path to ABI

// Create a provider and contract instance
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // Connect to local blockchain (Ganache)
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, provider); // Contract instance

// Fetch all transactions from the contract
export const fetchTransactions = async () => {
  try {
    const transactions = await contract.getAllTransactions(); // Calling the 'getAllTransactions' function from your contract
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

export default {
  fetchTransactions
};
