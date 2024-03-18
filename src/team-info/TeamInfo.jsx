import React from 'react';
import { Link } from 'react-router-dom';

function TeamInfo() {
  return (
    <div class="container">
    <h1 >Team info for player, parents, and coaches</h1>
        <div >
        <p>In this section you will find information you need day-in and day-out, throughout the season.</p>
        <p>Be sure to review the <a><Link to="/team-info/rocketsCalendar">calendar</Link></a> often.&nbsp; Schedules will change from time to time.&nbsp; We may encounter last minute changes by coaches OR the facilities.&nbsp; We’ll give you as much notice as possible, but <strong>please</strong> check the calendar <u>daily</u>…just in case a last minute change occurred.</p>
        <p>View the <a ><Link to="/team-info/rocketsCalendar">Teams</Link></a> page to see players’ names, position, jersey number, grad year, etc and contact information for each coach.&nbsp; Some player may include <u>other goodies</u>, such as link to the Player Bio or recent YouTube videos.</p>
        <p>The <a><Link to="/team-info/tourney">Rockets Tournament Schedule</Link></a> will list all tournaments for all teams. Check out the playing schedule (when available), general tournament info, and hotel information.&nbsp; And lastly, check out the <u>awesome</u> tournament results form ALL the teams!</p>
        </div>
    </div>
  );
}

export default TeamInfo;
