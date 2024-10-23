import challengePortada from "../../../../public/img/challengePortada.png"
type CardChallengeProps = {
   
    text:string
}
export const CardChallenge = ({text}:CardChallengeProps) =>{
    
    return(
        <div>
            <img src={challengePortada} className="rounde-t-lg"/>
             <p className="bg-[#605E5E] text-center rounded-b-lg">{text}</p>
        </div>
    )
}