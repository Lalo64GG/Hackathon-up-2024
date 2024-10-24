import React from 'react';
import InfoBox from './infoBox';

const EventCard: React.FC = () => {
  return (
    <div className="flex flex-row mt-4 gap-x-4">
       <InfoBox label="Date" value="10/10/2022" />
       <InfoBox label="Time" value="6:00 hrs" />
       <InfoBox label="Location" value="Mp Mexico" />
    </div>
  );
};

export default EventCard;
