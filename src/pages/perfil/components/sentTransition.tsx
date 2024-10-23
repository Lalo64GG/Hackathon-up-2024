import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type SentTransitionProps = {
  idWallet: string;
  value: number;
};

export const SentTransition = ({ idWallet, value }: SentTransitionProps) => {
  return (
    <div className="flex justify-between items-center bg-[#1a1a1a] p-4 rounded-lg w-full">
      <div className="flex items-center space-x-4">
        <div className="bg-[#261c1c] p-2 rounded-md">
          <ArrowOutwardIcon className="text-red-400 transform rotate-45" />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-white">Sent:</p>
          <p className="text-sm text-gray-400 truncate">{idWallet}</p>
        </div>
      </div>

      <p className="text-lg font-bold text-red-400">-{value.toFixed(2)}</p>
    </div>
  );
};
