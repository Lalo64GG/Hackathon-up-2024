import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <p className="mt-1 text-sm">
          Comfortable Clothing, hat, gloves (optional), water bottles
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Reward Validation</h2>
        <p className="mt-1 text-sm">
          Upload your evidence planting a tree or check-in with the event coordinator on-site
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
