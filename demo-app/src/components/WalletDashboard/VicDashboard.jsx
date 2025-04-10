import React from 'react';
import AssetList from '../common/AssetList';
import TransactionForm from '../common/TransactionForm';
import { CHAINS } from '../../config/chains';

const VicDashboard = () => {
  const assets = [
    { icon: CHAINS.viction.icon, name: 'Viction', balance: '0.20', value: '$5,950.00' }
  ];

  return (
    <div className="dashboard">
      <h2>Viction Wallet</h2>
      <AssetList assets={assets} />
      <TransactionForm chain="viction" />
    </div>
  );
};

export default VicDashboard;