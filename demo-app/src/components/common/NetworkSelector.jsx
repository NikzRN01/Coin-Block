import React from 'react';
import { CHAINS } from '../config/chains';

const NetworkSelector = ({ currentChain, onChange }) => {
  return (
    <select 
      value={currentChain} 
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.values(CHAINS).map((chain) => (
        <option key={chain.id} value={chain.id}>
          {chain.name}
        </option>
      ))}
    </select>
  );
};

export default NetworkSelector;