import React from 'react';
import AssetList from '../common/AssetList';
import TransactionForm from '../common/TransactionForm';
import { CHAINS } from '../../config/chains';

const BscDashboard = () => {
  const assets = [
    { icon: CHAINS.bsc.icon, name: 'Binance Smart Chain', balance: '0.30', value: '$7,950.00' }
  ];

  return (
    <div className="dashboard">
      <h2>BSC Wallet</h2>
      <AssetList assets={assets} />
      <TransactionForm chain="bsc" />
    </div>
  );
};

export default BscDashboard;