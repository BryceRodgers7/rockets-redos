import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './Layout';
import './App.css';
import Home from './Home';
import SecondPage from './SecondPage';
import TeamInfo from './team-info/TeamInfo';
import RocketsCalendar from './team-info/RocketsCalendar';
import Roster from './team-info/Roster';
import Tourney from './team-info/Tourney';
import Gyms from './team-info/Gyms';
import FamilySite from './team-info/FamilySite';
import Directory from './team-info/Directory';
import Tryouts from './tryouts/Tryouts';
import AgeRules from './tryouts/AgeRules';
import Recruiting from './recruiting/Recruiting';
import UnsignedPlayers from './recruiting/UnsignedPlayers';
import CollegeCommitments from './recruiting/CollegeCommitments';
import AlumniHometown from './recruiting/AlumniHometown';
import RocketsLanded from './recruiting/RocketsLanded';
import AlumniTips from './recruiting/AlumniTips';
import AlumniQuotes from './recruiting/AlumniQuotes';
import ClinicsRules from './clinics/ClinicsRules';
import VolleyballClinics from './clinics/VolleyballClinics';
import RocketsEvents from './rockets-events/RocketsEvents';
import Gallery from './gallery/Gallery';
import Age11s from './gallery/Age11s';
import RocketScience from './rocket-science/RocketScience';
import CoachBios from './rocket-science/CoachBios';
import ContactUs from './contact-us/ContactUs';



function App() {
  return (
    <Router>
      <Layout>

        <div>


          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/second">Second Page</Link>
              </li>
              <li>
                <Link to="/team-info">Team Info</Link>
              </li>
              <li>
                <Link to="/team-info/rockets-calendar">Rockets Calendar</Link>
              </li>
              <li>
                <Link to="/team-info/roster">Roster</Link>
              </li>
              <li>
                <Link to="/team-info/tourney">Tourney</Link>
              </li>
              <li>
                <Link to="/team-info/gyms">Gyms</Link>
              </li>
              <li>
                <Link to="/team-info/family-site">Family Site</Link>
              </li>
              <li>
                <Link to="/team-info/directory">Directory</Link>
              </li>
              <li>
                <Link to="/tryouts">Tryouts</Link>
              </li>
              <li>
                <Link to="/tryouts/age-rules">Age Rules</Link>
              </li>
              <li>
                <Link to="/recruiting">Recruiting</Link>
              </li>
              <li>
                <Link to="/recruiting/unsigned-players">Unsigned Players</Link>
              </li>
              <li>
                <Link to="/recruiting/college-commitments">College Commitments</Link>
              </li>
              <li>
                <Link to="/recruiting/alumni-home-town">Alumni Hometown</Link>
              </li>
              <li>
                <Link to="/recruiting/rockets-landed">Rockets Landed</Link>
              </li>
              <li>
                <Link to="/recruiting/alumni-tips">Alumni Tips</Link>
              </li>
              <li>
                <Link to="/recruiting/alumni-quotes">Alumni Quotes</Link>
              </li>
              <li>
                <Link to="/clinics-rules">Clinics Rules</Link>
              </li>
              <li>
                <Link to="/clinics/volleyball-clinics">Volleyball Clinics</Link>
              </li>
              <li>
                <Link to="/rockets-events">Rockets Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/gallery/age11s">Age 11s</Link>
              </li>
              <li>
                <Link to="/rocket-science">Rocket Science</Link>
              </li>
              <li>
                <Link to="/rocket-science/coach-bios">Coach Bios</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>

            </ul>
          </nav> */}

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/second" element={<SecondPage/>} />
            <Route path="/team-info" element={<TeamInfo/>} />
            <Route path="/team-info/rockets-calendar" element={<RocketsCalendar/>} />
            <Route path="/team-info/roster" element={<Roster/>} />
            <Route path="/team-info/tourney" element={<Tourney/>} />
            <Route path="/team-info/gyms" element={<Gyms/>} />
            <Route path="/team-info/family-site" element={<FamilySite/>} />
            <Route path="/team-info/directory" element={<Directory/>} />
            <Route path="/tryouts" element={<Tryouts/>} />
            <Route path="/tryouts/age-rules" element={<AgeRules/>} />
            <Route path="/recruiting" element={<Recruiting/>} />
            <Route path="/recruiting/unsigned-players" element={<UnsignedPlayers/>} />
            <Route path="/recruiting/college-commitments" element={<CollegeCommitments/>} />
            <Route path="/recruiting/alumni-home-town" element={<AlumniHometown/>} />
            <Route path="/recruiting/rockets-landed" element={<RocketsLanded/>} />
            <Route path="/recruiting/alumni-tips" element={<AlumniTips/>} />
            <Route path="/recruiting/alumni-quotes" element={<AlumniQuotes/>} />
            <Route path="/clinics-rules" element={<ClinicsRules/>} />
            <Route path="/clinics/volleyball-clinics" element={<VolleyballClinics/>} />
            <Route path="/rockets-events" element={<RocketsEvents/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/gallery/age11s" element={<Age11s/>} />
            <Route path="/rocket-science" element={<RocketScience/>} />
            <Route path="/rocket-science/coach-bios" element={<CoachBios/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}


export default App;
