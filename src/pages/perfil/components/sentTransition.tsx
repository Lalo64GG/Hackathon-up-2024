import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type SentTransitionProps = {
  idWallet: string;
  value: number;
};

export const SentTransition = ({ idWallet, value }: SentTransitionProps) => {
  return (
    <div className="flex justify-between items-center bg-[#1a1a1a] p-3 rounded-lg w-full">
      <div className="flex items-center space-x-3">
        <div className="bg-[#261c1c] p-1 rounded-md">
          <ArrowOutwardIcon className="text-red-400 transform rotate-45" fontSize="small" />
        </div>

        <div className="flex flex-col">
          <p className="text-sm font-medium text-white">Sent:</p>
          <p className="text-xs text-gray-400 truncate">{idWallet}</p>
        </div>
      </div>

      <p className="text-base font-semibold text-red-400">-{value.toFixed(2)}</p>
    </div>
  );
};
