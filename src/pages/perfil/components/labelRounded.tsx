type labelRoundedProps = {
    name:string  
} 
export const LabelRounded = ({name}:labelRoundedProps) => {
     
    return (
        <p className="w-64 rounded-xl bg-[#3C3939] text-center py-1 font-medium border-white border mb-3">
          {name}
        </p>
    )
}