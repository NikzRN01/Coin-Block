document.addEventListener('DOMContentLoaded', function() {
  // Network selector functionality
  const networkSelector = document.getElementById('networkSelector');
  const networkDropdown = document.getElementById('networkDropdown');
  const networkName = document.querySelector('.network-name');

  // View Transactions button
  document.getElementById('viewTxBtn').addEventListener('click', () => {
    chrome.tabs.create({ url: 'http://localhost:3000' });
  });

  // Network data with corrected asset paths
  const networkData = {
    ethereum: {
      name: "Ethereum Mainnet",
      balance: "3.5 ETH",
      value: "$6,842.50",
      assets: [
        { icon: "eth.png", name: "Ethereum", balance: "3.5 ETH", value: "$6,842.50" },
        { icon: "usdc.png", name: "USD Coin", balance: "1,250 USDC", value: "$1,250.00" }
      ]
    },
    bitcoin: {
      name: "Bitcoin",
      balance: "0.15 BTC",
      value: "$9,750.00",
      assets: [
        { icon: "btc.png", name: "Bitcoin", balance: "0.15 BTC", value: "$9,750.00" }
      ]
    },
    solana: {
      name: "Solana",
      balance: "42 SOL",
      value: "$4,200.00",
      assets: [
        { icon: "sol.png", name: "Solana", balance: "42 SOL", value: "$4,200.00" },
        { icon: "usdc.png", name: "USD Coin", balance: "500 USDC", value: "$500.00" }
      ]
    },
    bnb: {
      name: "BNB Smart Chain",
      balance: "5.8 BNB",
      value: "$1,740.00",
      assets: [
        { icon: "bnb.png", name: "BNB", balance: "5.8 BNB", value: "$1,740.00" }
      ]
    },
    viction: {
      name: "Viction",
      balance: "125 VIC",
      value: "$312.50",
      assets: [
        { icon: "viction.png", name: "Viction", balance: "125 VIC", value: "$312.50" }
      ]
    }
  };

  // Initialize with Ethereum data
  updatePortfolio('ethereum');

  function updatePortfolio(chain) {
    const data = networkData[chain];
    
    // Update balance
    document.querySelector('.balance-amount').textContent = data.balance;
    document.querySelector('.balance-equivalent').textContent = `≈ ${data.value}`;
    
    // Update network name
    document.querySelector('.network-name').textContent = data.name;
    
    // Update assets
    const assetList = document.querySelector('.asset-list');
    assetList.innerHTML = '';
    
    data.assets.forEach(asset => {
      // Use chrome.runtime.getURL() for Chrome extensions
      const iconPath = chrome.runtime.getURL(`assets/${asset.icon}`);
      
      assetList.innerHTML += `
        <div class="asset-item">
          <img src="${iconPath}" class="asset-icon" alt="${asset.name}">
          <div class="asset-details">
            <div class="asset-name">${asset.name}</div>
            <div class="asset-balance">${asset.balance}</div>
          </div>
          <div class="asset-value">${asset.value}</div>
        </div>
      `;
    });
  }

  // Toggle network dropdown
  networkSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    networkDropdown.classList.toggle('active');
  });

  // Handle network selection
  document.querySelectorAll('.network-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const chain = option.dataset.chain;
      updatePortfolio(chain);
      networkDropdown.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    networkDropdown.classList.remove('active');
  });
});

// In your popup.js
document.querySelectorAll('.send-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const chain = btn.dataset.chain; // 'bitcoin', 'ethereum' etc.
    chrome.tabs.create({ 
      url: chrome.runtime.getURL(`index.html#/${chain}/send`)
    });
  });
});