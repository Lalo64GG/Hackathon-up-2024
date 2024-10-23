
type CardDetailsProps = {
    title: string,
    description: string
}

export const CardDetails = ({title,description}:CardDetailsProps) => {

    return ( 
        <div className="bg-[#2e2e2e] rounded-2xl p-4 w-36">
            <p className="mb-3 font-semibold text-white text-md">{title}</p>
             <section className="flex flex-row items-center gap-4">
                <div className="w-4 h-4 border border-white rounded-full"></div> <p>{description}</p>
             </section>
        </div>
    )
}