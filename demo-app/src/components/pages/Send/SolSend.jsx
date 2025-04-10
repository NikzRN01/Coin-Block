import { useNavigate } from 'react-router-dom';

const SolSend = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle SOL transaction logic here
    navigate('/solana');
  };

  return (
    <div className="send-page">
      <h2>Send SOL</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" required />
        <input type="number" placeholder="Amount (SOL)" required />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/solana')}>Back</button>
    </div>
  );
};

export default SolSend;