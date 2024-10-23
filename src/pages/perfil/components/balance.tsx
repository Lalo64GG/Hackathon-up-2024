
type BalanceProps = {
    balanceCant: number
}

export const Balance = ({balanceCant}:BalanceProps) => {
      
    return (
         <div className="bg-[#151516] rounded-xl w-80 py-3 px-3 mt-3">
           <p className="text-xl font-semibold">Balance</p>
            <p>{balanceCant} k</p>
         </div>
    )
}