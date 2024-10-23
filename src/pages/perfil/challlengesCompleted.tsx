import rewardIcon from "../../../public/img/rewardMedal.png";
import sunIcon from "../../../public/img/sun.png";

type ChallengeCompletedProps = {
  lugar: string;
  tokenRecibed: number;
};

export const ChallengesCompleted = ({
  lugar,
  tokenRecibed,
}: ChallengeCompletedProps) => {
  return (
    <section className="grid items-center w-full grid-cols-[3fr,1fr,1fr]  gap-x-4">
      {/* Primera columna más grande */}
      <div className="flex flex-row items-center w-full gap-x-3">
        <img src={rewardIcon} className="w-5 h-5" alt="" />
        <p>{lugar}</p>
      </div>

      {/* Segunda columna */}
      <div className="flex justify-center w-full">
        Rewards
      </div>

      {/* Tercera columna */}
      <div className="flex flex-row items-center justify-end w-full gap-x-1">
        <img src={sunIcon} className="w-5 h-5" alt="" />
        <p>{tokenRecibed} k</p>
      </div>
    </section>
  );
};
