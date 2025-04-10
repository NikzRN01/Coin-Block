import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ethereum from './components/pages/Ethereum';
import Bitcoin from './components/pages/Bitcoin';
import Solana from './components/pages/Solana';
import Bsc from './components/pages/Bsc'; 
import Viction from './components/pages/Viction';
import EthSend from './components/pages/Send/EthSend';
import BtcSend from './components/pages/Send/BtcSend';
import SolSend from './components/pages/Send/SolSend';
import BscSend from './components/pages/Send/BscSend';
import VicSend from './components/pages/Send/VicSend';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ethereum />} />
        <Route path="/ethereum" element={<Ethereum />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/solana" element={<Solana />} />
        <Route path="/bsc" element={<Bsc />} />
        <Route path="/viction" element={<Viction />} />
        
        <Route path="/ethereum/send" element={<EthSend />} />
        <Route path="/bitcoin/send" element={<BtcSend />} />
        <Route path="/solana/send" element={<SolSend />} />
        <Route path="/bsc/send" element={<BscSend />} />
        <Route path="/viction/send" element={<VicSend />} />
      </Routes>
    </Router>
  );
}

export default App;