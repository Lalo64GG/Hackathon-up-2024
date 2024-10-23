import { LabelRounded } from "./labelRounded";
import { CardChallenge } from "./cardChallenge";
import { ChallengesCompleted } from "../challlengesCompleted";

export const Challenges = () => {
  const descriptionChallenges: string[] = [
    "National Park Reforesting",
    "National Park Reforesting",
    "National Park Reforesting",
    "National Park Reforesting",
  ];

  return (
    <div className="flex flex-row w-full gap-x-10">
      {/* Primera columna */}
      <section className="flex flex-col items-start justify-start w-[46%]">
        <LabelRounded name="Pending challenges" />

        <article className="grid grid-cols-2 mt-4 gap-y-3 gap-x-3">
          {descriptionChallenges.map((description, index) => {
            return <CardChallenge key={index} text={description} />;
          })}
        </article>
      </section>

     
      <section className="flex flex-col justify-start  w-[54%]">
        <LabelRounded name="Challenges Completed" />
        <div className="flex flex-col w-full mt-4 gap-y-7">
            {
                descriptionChallenges.map((description, index) => {
                    return <ChallengesCompleted 
                    lugar= {description}
                    tokenRecibed={0.4}
                    key={index}
                  />
                })
            }
          
        </div>
      </section>
    </div>
  );
};
