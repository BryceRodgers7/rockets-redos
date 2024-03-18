import React from 'react';
import imageSrc from '../assets/tryouts/teamAgeDefinition.png'; // Path to your image relative to the component file


function AgeRules() {
  return (
    <div>

      <p>Here is the age definition for USA Volleyball teams.&nbsp; USA Volleyball operates on July 1 – June 30 calendar.&nbsp; Use the rows and years to determine the TEAM AGE your player belongs to.</p>

      <img width="976" height="643" src={imageSrc}alt="Ack! not found" />


    </div>
  );
}

export default AgeRules;
