import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // For JSON body parsing

// Mock database
let walletState = {
  balance: 3.5,
  transactions: [
    { id: 1, to: "0x742...f44e", value: 0.5, timestamp: new Date() },
    { id: 2, to: "0xabc...1234", value: 1.0, timestamp: new Date() }
  ]
};

// API Endpoints
app.get('/api/balance', (req, res) => {
  res.json({ balance: walletState.balance });
});

app.get('/api/transactions', (req, res) => {
  res.json(walletState.transactions);
});

app.post('/api/send', (req, res) => {
  const { amount, recipient } = req.body;
  
  // Validate
  if (amount > walletState.balance) {
    return res.status(400).json({ error: "Insufficient balance" });
  }

  // Update balance
  walletState.balance -= amount;
  walletState.transactions.push({
    id: walletState.transactions.length + 1,
    to: recipient,
    value: amount,
    timestamp: new Date()
  });

  res.json({ success: true, newBalance: walletState.balance });
});

app.listen(5000, () => console.log('API running on http://localhost:5000'));