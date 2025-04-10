import { useNavigate } from 'react-router-dom';

const BtcSend = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle BTC transaction logic here
    navigate('/bitcoin');
  };

  return (
    <div className="send-page">
      <h2>Send Bitcoin</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" required />
        <input type="number" placeholder="Amount (BTC)" required />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/bitcoin')}>Back</button>
    </div>
  );
};

export default BtcSend;