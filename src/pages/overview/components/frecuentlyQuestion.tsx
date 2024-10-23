

type FrecuentyQuestionProps = {
    questions:string[]
}
export const FrecuentyQuestion = ({questions}:FrecuentyQuestionProps) => {

       

    return (
         <section className="flex flex-col mt-10">
            <p className="mb-5 font-semibold text-white">Frecuently Questions</p>
             <div className="flex flex-col">
                {
                    questions.map((question,index)=>{
                        if(index === 0){
                            return (<p key={index} className=" font-bold text-black bg-[#F6DF34] py-2 px-3 rounded-t-md">{question}</p>)
                        }
                        if (index === questions.length-1){
                            return (<p key={index} className=" font-bold text-black bg-[#F6DF34] py-1 px-3 rounded-b-md">{question}</p>)
                        }
                        return(
                            <p key={index} className=" font-bold text-black bg-[#F6DF34] py-1 px-3">{question}</p>
                        )
                    })
                }
             </div>
         </section>
    )
}

