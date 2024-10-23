import { Progress } from "@nextui-org/react"
type InformacionUserProps = {
      name:string,
      email:string,
      level:number,
      description:string
} 
export const InformacionUser = ({name,email,level,description}:InformacionUserProps) =>{
    
    return(
        <>
        <div className="grid items-center grid-cols-2 mx-5">
            <section className="flex flex-col">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-tiny">{email}</p>
            </section>
            <section className="flex flex-col items-end gap-y-2">
                <p>Reputation - <span className="text-[#DCCE0A]">level {level}</span></p>

                <Progress
      size="sm"
      value={45}
      maxValue={100}
      color="danger"
      
      className="w-72"
    />
            </section>
         </div>
         <p className="mt-6 ml-5 text-sm">
            {description}
         </p>
        </>
         
    )
}