import React from 'react';
import AssetList from '../common/AssetList';
import TransactionForm from '../common/TransactionForm';
import { CHAINS } from '../../config/chains';

const SolDashboard = () => {
  const assets = [
    { icon: CHAINS.solana.icon, name: 'Solana', balance: '0.19', value: '$7,075.00' }
  ];

  return (
    <div className="dashboard">
      <h2>Solana Wallet</h2>
      <AssetList assets={assets} />
      <TransactionForm chain="solana" />
    </div>
  );
};

export default SolDashboard;