
type OptionsProps = {
    handlerOptions: (option: number) => void
    valueOption: number
}
export const Options = ({handlerOptions,valueOption}:OptionsProps) =>{
      
    const changeOption = (option: number)=>{
         handlerOptions(option)
    }
    return (
        <section className="grid w-64 grid-cols-2 py-2 mx-5 mt-3 text-sm border-b border-white">
            <button onClick={() => changeOption(1)} className={`${valueOption == 1 && "text-[#BFED54]"}`}>My Profile</button>
            <button onClick={() => changeOption(2)} className={`${valueOption == 2 && "text-[#BFED54]"}`}>Wallet</button>
        </section>
    )
}