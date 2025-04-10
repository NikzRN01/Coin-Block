import React from 'react';

const AssetList = ({ assets }) => {
  return (
    <div className="asset-list">
      {assets.map((asset) => (
        <div key={asset.name} className="asset-item">
          <img src={asset.icon} alt={asset.name} />
          <span>{asset.name}: {asset.balance}</span>
        </div>
      ))}
    </div>
  );
};

export default AssetList;