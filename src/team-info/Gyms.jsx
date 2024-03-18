import React from 'react';
import recruiting from '../assets/common/recruiting.png'


function Gyms() {
  return (
    <div class="container">
      <div class="container-2">
        <div class="left-section">
        <header>
        <h1 >Gyms &amp; Courts</h1>			</header>
          <div >
            <p>Below are the various Gyms, Courts, or Facilities we often use for practices, tournaments or meetings.</p>
            <p><b><font COLOR="#ff0000">SC </font>– </b>Scanlon Gym (Mercer Aquatic Center) – 2701 Bradford, Iowa City<br />
            <b><font COLOR="#ff0000">StP </font>– </b>St Patrick Church gym – 4330 St Patrick Drive, Iowa City<br />
            <b><font COLOR="#ff0000">NDAC </font>– </b>North Dodge Athletic Club – 2400 North Dodge St, Iowa City<br />
            <b><font COLOR="#ff0000">WK </font>– </b>Wickham Elementary – 601 Oakdale Blvd, Coralville<br />
            <font COLOR="#ff0000"><b>FCC </b></font><b>– </b>First Christian Church – 900 Lincolnshire Blvd, Coralville<br />
            <strong><font COLOR="#ff0000">GG </font></strong>– Greg’s Gym – 2427 Hwy 6 NW, Tiffin (about 2 miles west of CCA High school) there’s a sand court in the front yard, then a big gray house, and Greg’s gym is in the backyard<br />
            <font COLOR="#ff0000"><b>BL </b></font><b>–</b> Borlaug Elementary – 1000 Kennedy Parkway Coralville<br />
            <font COLOR="#ff0000"><b>GW</b></font> – Grant Wood Elementary – 1930 Lakeside Dr, Iowa City<br />
            <font COLOR="#ff0000"> <b>SE </b></font><b>– </b>SouthEast Jr High – 2501 Bradford, Iowa City<br />
            <font COLOR="#ff0000"><b>Coralville Sand Cts </b></font><b>– </b>Oakdale Blvd, east of 1st Ave, Coralville<br />
            <font COLOR="#ff0000"><b>U of Iowa Sand Cts </b></font>– near Finkbine golf course &amp; U of Iowa Soccer fields</p>
          </div>
        </div>
        <div class="right-section">
          <img src={recruiting}></img>


        </div>
      </div>
    </div>
  );
}

export default Gyms;
