import { LabelRounded } from "./labelRounded";
import { CardChallenge } from "./cardChallenge";
import { ChallengesCompleted } from "../challlengesCompleted";

export const Challenges = () => {
  const descriptionChallenges: string[] = [
    "Reforestation - National Park - NYC" ,
    "Charity - National Park -NYC",
    "Sea Cleaning - National Park - NYC",
    "Reforestation - National Park - NYC" ,
    "Charity - National Park -NYC",
    "Sea Cleaning - National Park - NYC",
    "Reforestation - National Park - NYC" ,
    "Charity - National Park -NYC",
    "Sea Cleaning - National Park - NYC"
  ];

  interface ChallengeCard {
    text: string;
    location: string;
  }

  const descriptionChallengesCards: ChallengeCard[] = [
    {
      text: "Reforestation",
      location: "- National Park - NYC",
    },
    {
      text: "Charity",
      location: "- National Park - NYC",
    },
    {
      text: "Sea Cleaning",
      location: "- National Park - NYC",
    },
    {
      text: "Sea Cleaning",
      location: "- National Park - NYC",
    },
  ];
  return (
    <div className="flex flex-row w-full gap-x-10">
      {/* Primera columna */}
      <section className="flex flex-col items-start justify-start w-[48%]">
        <LabelRounded name="Pending challenges" />

       <article className="grid grid-cols-2 mt-4 gap-y-3 gap-x-3">
  {descriptionChallengesCards.map((challenge, index) => (
    <CardChallenge
      key={index}
      text={challenge.text}
      location={challenge.location}
    />
  ))}
</article>
      </section>

     
      <section className="flex flex-col justify-start  w-[52%]">
        <LabelRounded name="Challenges Completed" />
        <div className="flex flex-col w-full mt-4 gap-y-7 h-[30vh] overflow-y-auto scrollbar-hide">
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
