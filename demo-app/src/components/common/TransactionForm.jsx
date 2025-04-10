import { useNavigate } from 'react-router-dom';

const TransactionForm = ({ chain }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(`/${chain}/send`)}
      className="send-btn"
    >
      Send {chain.toUpperCase()}
    </button>
  );
};

export default TransactionForm;