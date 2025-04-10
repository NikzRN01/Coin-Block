import { useNavigate } from 'react-router-dom';

const EthSend = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ETH transaction logic here
    navigate('/ethereum');
  };

  return (
    <div className="send-page">
      <h2>Send ETH</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" required />
        <input type="number" placeholder="Amount (ETH)" required />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/ethereum')}>Back</button>
    </div>
  );
};

export default EthSend;