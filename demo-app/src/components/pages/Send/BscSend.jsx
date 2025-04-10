import { useNavigate } from 'react-router-dom';

const BscSend = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle BSC transaction logic here
    navigate('/bsc');
  };

  return (
    <div className="send-page">
      <h2>Send BSC</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" required />
        <input type="number" placeholder="Amount (BSC)" required />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/bsc')}>Back</button>
    </div>
  );
};

export default BscSend;