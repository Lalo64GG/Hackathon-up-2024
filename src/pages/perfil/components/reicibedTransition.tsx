import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type RecibedTransitionProps = {
  idWallet: string;
  value: number;
};

export const RecibedTransition = ({ idWallet, value }: RecibedTransitionProps) => {
  return (
    <div className="flex justify-between items-center bg-[#1a1a1a] p-4 rounded-lg w-full">
      <div className="flex items-center space-x-4">
        <div className="bg-[#16211c] p-2 rounded-md">
          <ArrowOutwardIcon className="text-green-400" />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-white">Received:</p>
          <p className="text-sm text-gray-400 truncate">{idWallet}</p>
        </div>
      </div>

      <p className="text-lg font-bold text-green-400">+{value.toFixed(2)}</p>
    </div>
  );
};
