import React from 'react';
import AssetList from '../common/AssetList';
import TransactionForm from '../common/TransactionForm';
import { CHAINS } from '../../config/chains';

const EthDashboard = () => {
  const assets = [
    { icon: CHAINS.ethereum.icon, name: 'Ethereum', balance: '0.18', value: '$5,970.00' }
  ];

  return (
    <div className="dashboard">
      <h2>Ethereum Wallet</h2>
      <AssetList assets={assets} />
      <TransactionForm chain="ethereum" />
    </div>
  );
};

export default EthDashboard;