
import { CardEvent } from "./cardEvent";

// Lista de eventos con datos simulados
const events = [
  { id: 1, title: "Community Garden", description: "Join us for a garden clean-up.", },
  { id: 2, title: "Beach Cleanup", description: "Help us clean the beach and protect marine life.",},
  { id: 3, title: "Tree Planting", description: "Come plant trees with us in the local park.", },
  { id: 4, title: "River Cleanup", description: "Join us for a river cleanup to protect our waters."},
  { id: 5, title: "Park Restoration", description: "Help restore the park with maintenance activities."},
];

export const SliderEvents = () => {


  return (
    <div className="relative w-full h-[600px] overflow-hidden flex flex-col gap-y-2">
          {
            events.map((event)=>{
                return <CardEvent key={event.id} title={event.title} description={event.description} />
            })
          }
    </div>
  );
};
