import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [sendAmount, setSendAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  // Connect to wallet
  const connectWallet = () => {
    window.postMessage({ 
      type: "REACTCONNECT_REQUEST", 
      action: "connect" 
    }, "*");

    const listener = (event) => {
      if (event.data.type === "REACTCONNECT_RESPONSE" && event.data.success) {
        setAccount(event.data.accounts[0]);
        fetchData();
        window.removeEventListener("message", listener);
      }
    };

    window.addEventListener("message", listener);
  };

  // Fetch balance and transactions
  const fetchData = async () => {
    const [balanceRes, txRes] = await Promise.all([
      fetch('/api/balance'),
      fetch('/api/transactions')
    ]);
    setBalance((await balanceRes.json()).balance);
    setTransactions((await txRes.json()));
  };

  // Send transaction
  const sendTransaction = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount: parseFloat(sendAmount), 
        recipient 
      })
    });
    const data = await res.json();
    if (data.success) {
      fetchData(); // Refresh data
      setSendAmount('');
      setRecipient('');
    }
  };
  
  return (
    <div className="app">
      <p>Account: <span className="account-address">{account}</span></p>
      {account ? (
        <div className="dashboard">
          <h2>Wallet Dashboard</h2>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
          
          <h3>Send ETH</h3>
          <form onSubmit={sendTransaction}>
            <input
              type="number"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              placeholder="Amount"
              step="0.01"
              min="0.01"
            />
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient Address"
            />
            <button type="submit">Send</button>
          </form>

          <h3>Transaction History</h3>
          <ul>
            {transactions.map(tx => (
              <li key={tx.id}>
                Sent {tx.value} ETH to {tx.to.slice(0, 6)}...{tx.to.slice(-4)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;