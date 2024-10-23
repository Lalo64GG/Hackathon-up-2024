import VNWallet from "./wallet"
import { Balance } from "./balance"
import { TransitionsHistory } from "./historialTranstition"

export const TransitionsW = ()=>{

    return (
     
     
     
         <section className="grid w-full grid-cols-2">
          <article>
          <VNWallet/>
           <Balance balanceCant={127013}/>
          </article>

          <article>
             
            <TransitionsHistory/>
          
          </article>
          
         </section>
    )
}