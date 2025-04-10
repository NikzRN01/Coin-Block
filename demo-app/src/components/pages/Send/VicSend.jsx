import { useNavigate } from 'react-router-dom';

const VicSend = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle VIC transaction logic here
    navigate('/viction');
  };

  return (
    <div className="send-page">
      <h2>Send VIC</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipient Address" required />
        <input type="number" placeholder="Amount (VIC)" required />
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate('/viction')}>Back</button>
    </div>
  );
};

export default VicSend;