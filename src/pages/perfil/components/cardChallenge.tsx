import challengePortada from "../../../../public/img/challengePortada.png";
type CardChallengeProps = {
  text: string;
  location: string; // "India", "USA", etc.
};
export const CardChallenge = ({ text, location }: CardChallengeProps) => {
  return (
    <div>
      <img src={challengePortada} className="rounde-t-2xl" />
      <div className="p-3 bg-[#605E5E] flex gap-x-2 rounded-b-2xl">
        <p className="text-white font-semibold text-sm">{text}</p>
        {}
        <p className="text-gray-300 text-xs pt-[0.2rem]">{location}</p>
      </div>
    </div>
  );
};
