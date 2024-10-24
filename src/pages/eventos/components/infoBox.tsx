import React from 'react';

interface InfoBoxProps {
  label: string;
  value: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col  w-36 p-3 text-white rounded-lg shadow-md bg-[#2F2F2F]">
      <span className="mb-1 text-sm font-medium">{label}</span>
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-start w-4 h-4 border-2 border-gray-400 rounded-full">
          <div className="w-2 h-2 bg-transparent rounded-full"></div>
        </div>
        <span className="text-base font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default InfoBox;
