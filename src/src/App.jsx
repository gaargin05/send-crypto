import React, { useEffect, useState } from 'react';
import { Loader, Services, Welcome, Transactions, Navbar, Footer } from './components';
import contract from './utils/contractInteraction'; // Import contract interaction

const App = () => {
  const [contractName, setContractName] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the smart contract when the app loads
  useEffect(() => {
    const fetchContractDetails = async () => {
      try {
        const name = await contract.name();  // Example function call
        setContractName(name);  // Store contract name in state
        setLoading(false);  // Stop loading once the data is fetched
      } catch (error) {
        console.error("Error fetching contract details:", error);
        setLoading(false);  // Stop loading even if there's an error
      }
    };

    fetchContractDetails();
  }, []);

  if (loading) {
    return <Loader />;  // Show a loading spinner or message while fetching contract data
  }

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
