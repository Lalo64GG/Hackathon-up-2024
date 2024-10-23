import { RecibedTransition } from "./reicibedTransition"
import { SentTransition } from "./sentTransition"
export const TransitionsHistory = () => {
      
    return (
        <div className="bg-[#151516] rounded-2xl">
         <RecibedTransition idWallet="EQDHirLoAYIhpIO..." value={100}/>
         <SentTransition idWallet="EQDHirLoAYIhpIO..." value={100}/>
        </div>
    )
}