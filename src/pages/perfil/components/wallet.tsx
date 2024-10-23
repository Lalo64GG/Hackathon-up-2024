const VNWallet = () => {
  return (
    <div className="flex items-center justify-between p-6 text-white shadow-lg bg-gradient-to-r from-green-500 to-purple-600 rounded-xl w-80">
      <div>
        <h2 className="text-2xl font-bold">VN Wallet</h2>
        <p className="text-sm opacity-80">EQDHirLoAYIhpIO...</p>
      </div>
      <button className="text-xl text-white bg-transparent border-none cursor-pointer">
        <i className="fas fa-copy"></i> 
      </button>
    </div>
  );
};

export default VNWallet;
