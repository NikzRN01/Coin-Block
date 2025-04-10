import React from 'react';
import AssetList from '../common/AssetList';
import TransactionForm from '../common/TransactionForm';
import { CHAINS } from '../../config/chains';

const BtcDashboard = () => {
  const assets = [
    { icon: CHAINS.bitcoin.icon, name: 'Bitcoin', balance: '0.15', value: '$9,750.00' }
  ];

  return (
    <div className="dashboard">
      <h2>Bitcoin Wallet</h2>
      <AssetList assets={assets} />
      <TransactionForm chain="bitcoin" />
    </div>
  );
};

export default BtcDashboard;