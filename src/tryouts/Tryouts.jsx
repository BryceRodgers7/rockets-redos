import React from 'react';
import '../App.css';
import imageSrc from '../assets/tryouts/tryouts-jump-joy.jpg';
import caitlin from '../assets/tryouts/18r-caitlin-set1-350.jpg';
import kelsey from '../assets/tryouts/15r-kelsey-dig1-250.jpg';
import block from '../assets/tryouts/14r-block1-250.jpg';
import recruiting from '../assets/common/recruiting.png';



function Tryouts() {
  return (
  
    <div  class="container">
      <div class="container-2">
        <div class="left-section">
          <h1 >Tryouts</h1>
          <div className='centered-text'> 
          <h2 ><font color="red">Tryout information for the UPCOMING 2023/2024 season is listed below.&nbsp;&nbsp;</font></h2>
          <font color="blue">
          <p > We do not currently have summer Tryouts scheduled.<br/>
    We understand that this early tryout period is stressful for some, but we are committed to forming the most competitive teams possible at every level.&nbsp; There are a lot of opportunities at Rockets. <strong>If you’re interested in Rockets, please CONTACT us by email or call us at (319) 330-9499.&nbsp; We’d LOVE to talk with you.&nbsp;</strong></p>
          <p ><strong>If you are not familiar with Iowa Rockets and would like to be considered for a certain team, just reach out to us.&nbsp; Contrary to popular belief, our teams are NOT set and we have openings on all teams.&nbsp;&nbsp;</strong></p>
          <p >We prefer to have tryouts AFTER your school season because it gives you a chance to improve and change. Plus we’ll have another round of clinics in the Fall – for all ages.<br/>
    There are at least 2 tryouts for each age group.&nbsp; Our tryouts only cost $30; and it’s worth the wait!<br/>
    Enjoy your summer, take a vacation, have a life, and<br/>
    come back in the Fall with renewed excitement for Volleyball!</p>
    </font>

    </div>
      <div className='centered-text' style={{backgroundColor: '#89b04f'}}><img src={imageSrc} alt="oops not found" /><br/>Raina and 17R – Celebrate Good Times!<br/> 
        <b> TRYOUTS will be held at both facilities; take note of WHERE your tryout is located – see addresses below.</b> <br/> 
        <b> Xtream Arena &amp; GreenState Family Fieldhouse</b> (just off I-80 at exit #242) – 200 East 9th St. in Coralville.<br/> 
        <b> Scanlon gym</b>  (Mercer Aquatic Center) 2701 Bradford Dr. Iowa City. With new age guidelines, we encourage you to tryout in both your “USAV age group” and your “grade level age group” if they are different.<br/> 
        Only those with a July or August birthday are affected.If you’re unsure of which age to tryout in, check the age definition chart – <a href="https://iowarockets.com/index.php/tryouts/tryout-age-definition/">here</a>.<br/> 
        Or you may text Kyla at (319) 330-9499 and she will call or text you back. <b> Tryout fee of $30 covers both tryouts.</b>  ($45 tryout fee if you do not pre-register <b><u>online at least 24 hours before tryout</u></b>.)<p></p>
        <h3>Online Registration is open –registration closed</h3>
        <p>All girls should complete online (and pay for) their membership with USA Volleyball prior to trying out.<br/> 
        To see the Tryout Schedule in Calendar form, click on ‘Team Info’ and ‘Calendar’ above, to the left.<br/> 
        Once you have successfully registered online for tryouts, (not till September) please send a check for $30 to:<br/> 
        <b> Iowa Rockets   3 Rapid Creek Dr. NE   Iowa City, IA 52240<br/> 
        Please indicate<b>athlete’s name</b>and<b>tryout AGE group</b> (e.g. Amy Adams, 15s) in the memo section of your check. </b> </p>
      </div>

      
      <div className='centered-text' > 
        <div class="container-2" style={{backgroundColor: '#f2abb4'}}>
          <div class="left-section">
          <figure><img loading="lazy" src={caitlin} alt="18r-caitlin-set1-350" width="350" height="526"/><figcaption>Caitlin Smith – Drake Univ.</figcaption></figure>
          </div>
          <div class="right-section">
            <strong><u>10s, 11s, &amp; 12s</u> will be Sun Oct 8th at Scanlon 1:30-3:30pm;&nbsp; and Sat Oct 14th at Scanlon 4-6pm<br/>
            </strong><br/>
            <strong><u>13s </u>&nbsp;will be Sun Oct 15th 4-6pm at XTREAM;&nbsp; and Sun Oct 22nd 4-6pm at XTREAM<br/>
            </strong><br/>
            <strong><u>14s </u>&nbsp;will be Sun Oct 15th 6-8pm at XTREAM;&nbsp; and Sun Oct 22nd 6-8pm at XTREAM</strong>
            <p><strong><u>15s *</u> will be Sat Oct 21st 4-6pm at XTREAM;&nbsp; and Sun Oct 29th 4-6pm at Scanlon<br/>
            </strong><br/>
            <strong> <u>16s *</u> will be Sat Oct 21st 6-8pm at XTREAM;&nbsp; and Sun Oct 29th 6-8pm at Scanlon<br/>
            </strong><br/>
            <strong> <u>17s &amp; 18s </u>&nbsp;will be Sat Oct 28th 4-6pm at XTREAM;&nbsp; and Sat Nov 4th 9:30-11:30am at XTREAM<br/>
            </strong><strong>*For 15s </strong>participating in State VB – Sat Nov 4th 8-9:30am at XTREAM<br/>
            <strong>*For 16s </strong>participating in State VB – Sat Nov 4th 8-9:30am at XTREAM</p>
            <p>Be sure to check out <a href="http://iowarockets.com/wp-content/uploads/2022/07/BeforeYouAttend2022-23.pdf" target="_blank" rel="noopener">Before You Attend</a> info and <a href="http://iowarockets.com/index.php/rockets-science/" target="_blank" rel="noopener">In a Nutshell</a> for more information about Iowa Rockets!</p>
            <p></p>
            <br/>
          </div>
        </div>
      </div>

      <div class="container-2a" style={{backgroundColor: '#2533f5'}}>
        <div class="left-3-1">
          <figure><img src={block}/><figcaption>Macy &amp; Alexis “The Wall”</figcaption></figure>
          <figure><img src={kelsey}/><figcaption>Kelsey diggin’ it up!</figcaption></figure>
        </div>
        <div class="right-3-2">
          {/* <div style={{backgroundColor: '#2533f5'}}> */}
            <div>
              <font style={{color: '#ffffff'}}>Tryouts can be stressful – just try your best, play FREE, and have some fun! We are not always looking at the ‘result’ of your skill. Often we are looking at effort, willingness to change, judgement, how you treat others, hustle, communication, and the intangibles that make a good teammate. These things are hard to evaluate, so just let your colors shine thru!</font>
            </div>
            <div>
              <font style={{color: '#b8b8b8'}}><p align="center">We prefer to have you tryout in the youngest age group that you’re eligible for. That way we can field strong teams in every age group. If you are unsure of the age group you should tryout in, just give us a call at (319) 337-3613 or 330-9499, and we’ll help you figure it out. Or check with the Iowa Region regarding <a href="https://iowarockets.com/index.php/tryouts/tryout-age-definition/" target="_blank" rel="noopener"><font style={{color: '#ff6600'}}>NEW age definitions.</font></a> The clinics that we run are totally separate from Rockets and you do not have to get into a clinic to tryout for Rockets. ALL are welcome to tryout! The fee of $30 covers both tryouts. You can mail or deliver a check in advance, or pay cash at the door. (The tryout fee is $45 if you do not pre-register online <u><strong>at least 24 hours before the tryout.</strong></u>)</p></font>
            </div>
          {/* </div>  */}
        </div>
      </div>
    </div>

    <div class="right-section"> 
      <img src={recruiting}></img>

    </div>
    </div>
  </div>
  );
}

export default Tryouts;
