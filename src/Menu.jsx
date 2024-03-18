import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (

<div class="dropdown-list">

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/team-info">Team Info</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/team-info/rockets-calendar">Rockets Calendar</Link><br /><br />
			<Link to="/team-info/roster">Teams 2023-2024</Link><br /><br />
			<Link to="/team-info/tourney">2023-2024 Tournament Schedule</Link><br/><br/>
			<Link to="/team-info/gyms">Gyms &amp; Courts</Link><br/><br/>
			<Link to="/team-info/family-site">Iowa Rockets Family Site</Link><br/><br/>
			<Link to="/team-info/directory">On-line entry for Directory</Link>
		</ul>
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/tryouts">Tryouts</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/tryouts/age-rules">Team Age Definition</Link><br /><br />
		</ul>
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/recruiting">Recruiting</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/recruiting/unsigned-players">Unsigned Players</Link><br /><br />
			<Link to="/recruiting/college-commitments">Recent College Commitments</Link><br /><br />
			<Link to="/recruiting/alumni-home-town">Alumni Home Town</Link><br/><br/>
			<Link to="/recruiting/rockets-landed">Rockets have Landed</Link><br/><br/>
			<Link to="/recruiting/alumni-tips">Alumni Tips</Link><br/><br/>
			<Link to="/recruiting/alumni-quotes">Alumni Quotes</Link>
		</ul>
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/clinics-rules">Clinics</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/clinics/volleyball-clinics">Volleyball Clinics</Link><br /><br />
		</ul>
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/rockets-events">Rockets Events</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/gallery">Gallery</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/gallery/age11s">11s Pics</Link><br /><br />
		</ul>
	</div>
  </div>

  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/rocket-science">Rocket Science</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
    <div class="dropdown-content">
		<ul class="sub-menu">
			<Link to="/rocket-science/coach-bios">Coach Bios</Link><br /><br />
		</ul>
	</div>
  </div>
  
  <div class="dropdown">
    <div class="dropdown-trigger">
		<Link to="/contact-us">Contact Us</Link><br /><br />
		{/* <a href="localhost:3000/team-info/">Team Info<span role="presentation" class="dropdown-menu-toggle"></span></a> */}
	</div>
  </div>

</div>
  );
}

export default Menu;



// import React, { useState } from 'react';
// import './styles.css';

// function DropdownMenu() {
//   const [showMenu1, setShowMenu1] = useState(false);
//   const [showMenu2, setShowMenu2] = useState(false);
//   const [showMenu3, setShowMenu3] = useState(false);

//   return (
//     <div className="dropdown-menu">
//       <div className="dropdown" onMouseEnter={() => setShowMenu1(true)} onMouseLeave={() => setShowMenu1(false)}>
//         <div className="dropdown-trigger">Dropdown 1</div>
//         {showMenu1 && (
//           <div className="dropdown-content">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         )}
//       </div>
//       <div className="dropdown" onMouseEnter={() => setShowMenu2(true)} onMouseLeave={() => setShowMenu2(false)}>
//         <div className="dropdown-trigger">Dropdown 2</div>
//         {showMenu2 && (
//           <div className="dropdown-content">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         )}
//       </div>
//       <div className="dropdown" onMouseEnter={() => setShowMenu3(true)} onMouseLeave={() => setShowMenu3(false)}>
//         <div className="dropdown-trigger">Dropdown 3</div>
//         {showMenu3 && (
//           <div className="dropdown-content">
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DropdownMenu;
