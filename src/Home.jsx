import React, { useState, useEffect } from 'react'
import Menu from './Menu'

import krammer3 from './assets/homepage/15r-krammer3.jpg'
import naeve2 from './assets/homepage/15r-naeve2.jpg'
import whitford from './assets/homepage/15r-whitford.jpg'
import lupkes from './assets/homepage/16r-lupkes-pic2.jpg'
import berkland from './assets/homepage/18r-berkland-pic1.jpg'
import messenger from './assets/homepage/151-messenger.jpg'
import lukkerinan from './assets/homepage/161-lukkerinan.jpg'
import hemphill from './assets/homepage/171-hemphill.jpg'
import allaman from './assets/homepage/2027-allaman.jpg'
import miller from './assets/homepage/2027-h-miller.jpg'
import wilson from './assets/homepage/2027-wilson.jpg'

import homepageTourney from './assets/homepage/18R-CF-tourney-1st.jpeg'
import leighton from './assets/homepage/leightonattack1a.jpg'

import edie from './assets/homepage/edie-43-digs.png'
import dixon from './assets/homepage/dixon-pic2a-153x300.jpg'
import bliss from './assets/homepage/bliss-serve1crop-194x300.jpg'
import bendlage from './assets/homepage/MK-bendlage-pic-1a-175x300.jpg'

const pictures = [
  krammer3,
  naeve2,
  whitford,
  lupkes,
  berkland,
  messenger,
  lukkerinan,
  hemphill,
  allaman,
  miller
]

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 2) % pictures.length)
    }, 10000) // Transition every 10 seconds
    return () => clearInterval(interval)
  }, [])

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(prevIndex => (prevIndex + 2) % pictures.length)
  }

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? pictures.length - 2 : prevIndex - 2
    )
  }

  return (
    <div>
      {/* <Menu/> */}
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the app.</p>

{/* 
      <div id="page-header-7" class="page-header-content page-header-contained grid-container grid-parent generate-page-header generate-content-header">
					<div class="inside-page-header-container inside-content-header  "><div class="page-header-content-wrapper   grid-container grid-parent">
						<div class="generate-inside-page-header-content page-header-content-container">
							
								<div id="metaslider-id-1828" style="max-width: 1000px;" class="ml-slider-3-27-6 metaslider metaslider-flex metaslider-1828 ml-slider nav-hidden">
    <div id="metaslider_container_1828">
        <div id="metaslider_1828" class="flexslider">
            <ul aria-live="polite" class="slides">
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; z-index: 2;" class="slide-3110 ms-image flex-active-slide"><a href="https://iowarockets.com/index.php/recruiting/unsigned-players/" target="_self"><img src="https://iowarockets.com/wp-content/uploads/2016/07/2016-college-names.jpg" height="300" width="1000" alt="" class="slider-1828 slide-3110" draggable="false"></a></li>
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; z-index: 1;" class="slide-1829 ms-image" aria-hidden="true"><img src="https://iowarockets.com/wp-content/uploads/2016/02/2016-champ1.jpg" height="300" width="1000" alt="" class="slider-1828 slide-1829" draggable="false"></li>
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; z-index: 1;" class="slide-17501 ms-image" aria-hidden="true"><img src="https://iowarockets.com/wp-content/uploads/2023/07/regionchamps-9b-1.jpg" height="300" width="1000" alt="" class="slider-1828 slide-17501" title="regionchamps-9b" draggable="false"></li>
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; z-index: 1;" class="slide-4936 ms-image" aria-hidden="true"><a href="https://iowarockets.com/index.php/recruiting/unsigned-players/" target="_self"><img src="https://iowarockets.com/wp-content/uploads/2017/05/2017-college-names.jpg" height="300" width="1000" alt="" class="slider-1828 slide-4936" draggable="false"></a></li>
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; z-index: 1;" class="slide-1830 ms-image" aria-hidden="true"><img src="https://iowarockets.com/wp-content/uploads/2016/02/2016-champ2.jpg" height="300" width="1000" alt="" class="slider-1828 slide-1830" draggable="false"></li>
                <li style="display: block; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; z-index: 1;" class="slide-7598 ms-image" aria-hidden="true"><img src="https://iowarockets.com/wp-content/uploads/2018/08/2018-5x-medal-2.jpg" height="300" width="1000" alt="" class="slider-1828 slide-7598" draggable="false"></li>
            </ul>
        <ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#">&lt;</a></li><li class="flex-nav-next"><a class="flex-next" href="#">&gt;</a></li></ul></div>
        
    </div>
</div>
						</div>
					 </div>
					</div>
				</div> */}

<div > 
  <h2>Rockets 18R Starts the Season Strong</h2>
  <div className="container-2">
    <div className="left-section">
  <img className="sized-image" loading="lazy" src={homepageTourney} alt="" title="18R-CF-tourney-1st" />
    </div>
  <div className="right-section" >
  <p>Iowa Rockets 18R gets the season off to a great start with a 1st place finish in Cedar Falls on Saturday.  </p>
  </div>
  </div>
  <h2>Rockets Reach Top Honors</h2>
  <p>Congratulations to the Iowa Rockets players who have received top honors for their outstanding contributions. From freshmen to seniors.  From west to east, these players have been identified for exceptional performance for their high school teams. </p>

  <div className="container-2">
  <div className="left-section">
  <figure ><img src={leighton} alt="" /><figcaption>Leighton Messinger – Washington HS</figcaption></figure>
  </div>

  <div className="right-section">
  <p><strong>Alyssa Dixon</strong>, Jr. – Conference Player of the Year for the Western Big 6 Conference (Illinois)</p>
  <p><strong>Bliss Beck</strong>, Sr. – Des Moines Register All-State team, 4A 1st team All-State IGCA, Conference Player of the year for WAMAC Conference</p>
  <p><strong>Edie Miller</strong>, Fr. – Des Moines Register All-State team</p>
  <p><strong>Leighton Messigner</strong>, So. – Conference Player of the Year for Southeast Iowa Super Conference North Division</p>
  <p><strong>Mary Kate Bendlage</strong>, Sr. – 1A 1st team All-State IGCA; Conference Player of the Year for Southeast Iowa Super Conference South Division</p>
  <p><strong>Michaela Goad</strong>, Sr. – 4A 1st team All-State IGCA</p>
  </div>
  </div>


  {/* container-4 doesn't exist yet... need to create 25% spaces and size down the images inside of them */}


  <div className="container-4">

  <div className="left-1">
  <figure ><img class="item-image" loading="lazy" width="194" height="300" src={bliss} alt="" title="bliss-serve1crop"/>
  <figcaption >Bliss Beck – Clear Creek Amana / Drake University</figcaption>
  </figure>
  </div>
  <div className="left-2">
  <figure ><img class="item-image" loading="lazy" width="153" height="300" src={dixon} alt="" title="dixon-pic2a"/>
  <figcaption >Alyssa Dixon – Moline HS</figcaption>
  </figure>
  </div>
  <div className="right-2">
  <figure ><img class="item-image" loading="lazy" width="737" height="589" src={edie} alt="" title="edie-43-digs"/>
  <figcaption >Edie Miller – Liberty HS</figcaption>
  </figure>
  </div>
  <div className="right-1">
  <figure ><img class="item-image" loading="lazy" width="175" height="300" src={bendlage} alt="" title="MK-bendlage-pic-1a"/>
  <figcaption >Mary Kate Bendlage – <br/>Holy  Trinity Catholic School</figcaption>
  </figure>
  </div>

  </div>




        <h2>Iowa Rockets Recruiting</h2>

        <div className="gradient-container" >
          <div className="left-section">
            <p>
              Browse the list of Iowa Rockets players on the{' '}
              <a href="https://iowarockets.com/index.php/recruiting/unsigned-players/">
                Unsigned Players
              </a>{' '}
              recruiting page. Contact us anytime for more information on these
              players!
            </p>
          </div>
          <div className="right-section">
            <div className="slideshow">
              



              <div className="slide">



  {/* 
              <div class="flex-viewport" style={{overflow: hidden, position: relative}}><ul className="slides" style="width: 8000%; transition-duration: 0.5s; transform: translate3d(-1550px, 0px, 0px);">
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17714 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/15r-krammer3.jpg" height="225" width="150" alt="" class="slider-16306 slide-17714" title="15r krammer3" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18721 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/17r-mccomas-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18721" title="17r-mccomas-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-16307 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/02/16r-asta-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-16307" title="16r asta pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18116 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/10/2026-lahr-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18116" title="2026 lahr" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-16314 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/02/181-benson-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-16314" title="181 benson pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18386 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2026-henderson-200b-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18386" title="2026 henderson 200b" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17721 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/151-messenger.jpg" height="225" width="150" alt="" class="slider-16306 slide-17721" title="151 messenger" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17716 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/161-lukkerinan.jpg" height="225" width="150" alt="" class="slider-16306 slide-17716" title="161 lukkerinan" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18393 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-austen-200-150x225.png" height="225" width="150" alt="" class="slider-16306 slide-18393" title="2027 austen 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17720 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/15r-naeve2.jpg" height="225" width="150" alt="" class="slider-16306 slide-17720" title="15r naeve2" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18390 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-h-miller-200a-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18390" title="2027 h miller 200a" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-16721 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/03/171-hemphill-150-149x224.jpg" height="225" width="150" alt="" class="slider-16306 slide-16721" title="171 hemphill-150" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18395 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-wilson-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18395" title="2027 wilson 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18713 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/16r-lupkes-pic2.jpg" height="225" width="150" alt="" class="slider-16306 slide-18713" title="16r-lupkes-pic2" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17713 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/15r-whitford.jpg" height="225" width="150" alt="" class="slider-16306 slide-17713" title="15r whitford" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18394 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-allaman-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18394" title="2027 allaman 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17715 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/161-ray.jpg" height="225" width="150" alt="" class="slider-16306 slide-17715" title="161 ray" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17723 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/17r-schrage.jpg" height="225" width="150" alt="" class="slider-16306 slide-17723" title="17r schrage" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18712 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/17r-rapps-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18712" title="17r-rapps-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17726 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/161-huffman3.jpg" height="225" width="150" alt="" class="slider-16306 slide-17726" title="161 huffman3" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18706 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-neuhaus-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18706" title="171-neuhaus-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18392 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-e-miller-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18392" title="2027 e miller 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18385 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2025-buysse-200b-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18385" title="2025 buysse 200b" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18715 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/181-smallwood-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18715" title="181-smallwood-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-17751 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/07/16r-sell.jpg" height="225" width="150" alt="" class="slider-16306 slide-17751" title="16r sell" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18387 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2025-rolland-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18387" title="2025 rolland 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18708 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/181-powell-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18708" title="181-powell-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18389 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-kruse-200a-150x225.png" height="225" width="150" alt="" class="slider-16306 slide-18389" title="2027 kruse 200a" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18718 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-huber-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18718" title="171-huber-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18709 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/181-wear-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18709" title="181-wear-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18388 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-simpson-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18388" title="2027 simpson 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18707 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/181-allen-pic2.jpg" height="225" width="150" alt="" class="slider-16306 slide-18707" title="181-allen-pic2" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18717 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-ballenger-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18717" title="171-ballenger-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18391 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/11/2027-galloway-200-150x225.jpg" height="225" width="150" alt="" class="slider-16306 slide-18391" title="2027 galloway 200" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18710 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-morales-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18710" title="171-morales-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18711 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-lillyb-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18711" title="171-lillyb-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18714 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-ray-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18714" title="171-ray-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18716 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/171-huffman-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18716" title="171-huffman-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18719 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/18r-keller-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18719" title="18r-keller-pic1" draggable="false"/></li>
                  <li style="display: block; width: 150px; margin-right: 5px; float: left;" class="slide-18720 ms-image"><img src="https://iowarockets.com/wp-content/uploads/2023/12/17r-erwin-pic1.jpg" height="225" width="150" alt="" class="slider-16306 slide-18720" title="17r-erwin-pic1" draggable="false"/></li>
                  </ul>
              </div> */}


                <img
                  src={pictures[currentIndex]}
                  height="225"
                  width="150"
                  alt="Slide 1"
                />
                <img
                  src={pictures[currentIndex + 1]}
                  height="225"
                  width="150"
                  alt="Slide 2"
                />
                <a className="prev" href="#" onClick={prevSlide}></a>
                <a className="next" href="#" onClick={nextSlide}></a>             
              </div>
            </div>
          </div>
        </div>

        <h2>Congratulations Iowa Rockets Players in Their High School Season</h2>

        <p>
          We are proud of our many, many Iowa Rockets players who helped their
          high school teams. Along the way they received many awards and
          recognitions!! Here is a list of the Iowa Rockets players and their
          accolades. (Please contact Iowa Rockets if you have additional
          recognition which we may have missed.)
        </p>

        <tbody>
          <tr>
            <td>
              <strong>Addison Gisleson</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
                <li>Academic All-State by Iowa Coaches Association</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Asialin Powell</strong>
            </td>
            <td>Roosevelt HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Alysia Perez</strong>
            </td>
            <td>Geneseo HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference Big Sky</li>
                <li>Illinois 3A 2nd Team All-State</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Alyssa Dixon</strong>
            </td>
            <td>Moline HS</td>
            <td>Jr.</td>
            <td>
              {' '}
              <ul>
                {' '}
                <li>
                  <b>Conference Player of the Year Western Big 6</b>
                </li>{' '}
                <li>1st Team All Conference Western Big 6</li>
              </ul>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Amiya Smallwood</strong>
            </td>
            <td>Sigourney HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>1st Team All Conference</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Annaka Greiner</strong>
            </td>
            <td>Wapello HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>1st Team All Conference SEIC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Asta Hildebrand</strong>
            </td>
            <td>Liberty HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>5A 2nd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ava Czarnecki</strong>
            </td>
            <td>Lisbon HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>1st Team All Conference Tri-River</li>
                <li>2A 2nd Team All-State by Iowa Coaches Association</li>
                <li>Player of the year Tri-River</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ava Morrison</strong>
            </td>
            <td>West Liberty HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Averi Nielsen</strong>
            </td>
            <td>Williamsburg HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Averie Lower</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>4A 3rd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Belle Seaman</strong>
            </td>
            <td>Muscatine HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>1st Team All Conference MAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Bliss Beck</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>
                  <b>Conference Player of the Year WAMAC</b>
                </li>
                <li>
                  <b>4A 1st Team All-State by Iowa Coaches Association</b>
                </li>
                <li>All District Team by Iowa Coaches Association</li>
                <li>Senior All-Star Team by Iowa Coaches Association</li>
                <li>Academic All-State by Iowa Coaches Association</li>
                <li>4A KMA Sport All-State</li>
                <li>
                  <b>Des Moines Register All-State</b>
                </li>
                <li>1st Team All Conference WAMAC</li>
                <li>1A State All Tournament Team</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Brooke Ellyson</strong>
            </td>
            <td>Marion HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Brylee Seaman</strong>
            </td>
            <td>Muscatine HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>1st Team All Conference MAC</li>
                <li>5A KMA Sport All-State</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Brynn Deike</strong>
            </td>
            <td>Solon HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Callie Huber</strong>
            </td>
            <td>Mid-Prairie HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Claire Ernst</strong>
            </td>
            <td>Iowa City High HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>5A 3rd Team All-State by Iowa Coaches Association</li>
                <li>Academic All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Dru Dorsey</strong>
            </td>
            <td>Assumption HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Edie Miller</strong>
            </td>
            <td>Liberty HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>5A 3rd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference MVC</li>
                <li>5A KMA Sport All-State</li>
                <li>
                  <b>Des Moines Register All-State</b>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Emily Hemphill</strong>
            </td>
            <td>Wapello HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>1A 4th Team All-State by Iowa Coaches Association</li>
                <li>Academic All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference SEIC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Emily Henderson</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Emmy McComas</strong>
            </td>
            <td>Iowa City High HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Gabby Morales</strong>
            </td>
            <td>West Liberty HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>3A 3rd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Grace Erwin</strong>
            </td>
            <td>Solon HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>3A 4th Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Gracie Harrington</strong>
            </td>
            <td>Midland HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference Tri-River</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Hadley Miller</strong>
            </td>
            <td>Liberty HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Hannah Jansen</strong>
            </td>
            <td>Muscatine HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Hattie Galloway</strong>
            </td>
            <td>Iowa City High HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Heather Hingst</strong>
            </td>
            <td>Prairie HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
                <li>Honorable Mention All-Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Isabelle Kremer</strong>
            </td>
            <td>Pleasant Valley HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>5A 2nd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference MAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Jaden Rolland</strong>
            </td>
            <td>Mount Vernon HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Jessi Kucera</strong>
            </td>
            <td>Iowa City High HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Joslynn Mehaffy</strong>
            </td>
            <td>Marion HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
                <li>Honorable Mention All-Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Jozie Lahr</strong>
            </td>
            <td>Solon HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Kathryn Lukkarinen</strong>
            </td>
            <td>Macomb HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>1st Team All Conference Praireland</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Kennedey Whitford</strong>
            </td>
            <td>Solon HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Kenzie McClelland</strong>
            </td>
            <td>Grinnell HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>1st Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Kiley Devery</strong>
            </td>
            <td>Regina Catholic HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MVC</li>
                <li>All District Team by Iowa Coaches Association</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Leighton Messinger</strong>
            </td>
            <td>Washington HS</td>
            <td>So.</td>
            <td>
              {' '}
              <ul>
                {' '}
                <li>1st Team All Conference SEIC</li>{' '}
                <li>
                  <b>Conference Player of the Year SEIC South Division</b>
                </li>{' '}
                <li>All District Team by Iowa Coaches Association</li>{' '}
              </ul>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Lexi Haller</strong>
            </td>
            <td>Jefferson HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
                <li>Honorable Mention All-Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Lilly Bergren</strong>
            </td>
            <td>Fairfield HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>1st Team All Conference SEIC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Lizzie Rapps</strong>
            </td>
            <td>Geneseo HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>1st Team All Conference Big Sky</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Logan Keller</strong>
            </td>
            <td>Center Point Urbana HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Lola Holub</strong>
            </td>
            <td>Anamosa HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Lucy Maassen</strong>
            </td>
            <td>Liberty HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Macie Lupkes</strong>
            </td>
            <td>Central City HS</td>
            <td>So.</td>
            <td>
              {' '}
              <ul>
                {' '}
                <li>2nd Team All Conference Tri-River</li>{' '}
                <li>All District Team by Iowa Coaches Association</li>
              </ul>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Maddie Determan</strong>
            </td>
            <td>Moline HS</td>
            <td>Jr.</td>
            <td>
              {' '}
              <ul>
                {' '}
                <li>1st Team All Conference Western Big 6</li>{' '}
              </ul>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Madelynn Falco</strong>
            </td>
            <td>West Branch HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Mary Kate Bendlage</strong>
            </td>
            <td>Holy Trinity Catholic HS</td>
            <td>Sr.</td>
            <td>
              {' '}
              <ul>
                {' '}
                <li>All District Team by Iowa Coaches Association</li>{' '}
                <li>
                  <b>1A 1st Team All-State by Iowa Coaches Association</b>
                </li>{' '}
                <li>Senior All-Star Team by Iowa Coaches Association</li>{' '}
                <li>
                  <b>Conference Player of the Year SEIC North Division</b>
                </li>{' '}
                <li>1st Team All Conference SEIC</li>{' '}
                <li>1A State All Tournament Team</li>{' '}
              </ul>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Maya Benhart</strong>
            </td>
            <td>North Cedar HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference Tri-River</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Meg Berkland</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>4A 2nd Team All-State by Iowa Coaches Association</li>
                <li>Senior All-Star Team by Iowa Coaches Association</li>
                <li>1st Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Melae Lacy</strong>
            </td>
            <td>Iowa City West HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>1st Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Michaela Goad</strong>
            </td>
            <td>Marion HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>
                  <b>4A 1st Team All-State by Iowa Coaches Association</b>
                </li>
                <li>Senior All-Star Team by Iowa Coaches Association</li>
                <li>1st Team All Conference WAMAC</li>
                <li>1st Team All-Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Molly Garrison</strong>
            </td>
            <td>Xavier HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>4A 3rd Team All-State by Iowa Coaches Association</li>
                <li>2nd Team All Conference MVC</li>
                <li>1st Team All-Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Mya Wagner</strong>
            </td>
            <td>Wapello HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>1st Team All Conference SEIC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Natalee Hartman</strong>
            </td>
            <td>Marion HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>Senior All-Star Team by Iowa Coaches Association</li>
                <li>1st Team All-Metro</li>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Paige Foltz</strong>
            </td>
            <td>Center Point Urbana HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Pacee Sorgenfrey</strong>
            </td>
            <td>Tipton HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>2nd Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Presley Meyers</strong>
            </td>
            <td>Holy Trinity Catholic HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>2nd Team All-State by Iowa Coaches Association</li>
                <li>1A KMA Sport All-State</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Reagan Stensrud</strong>
            </td>
            <td>Grinnell HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Reese Naeve</strong>
            </td>
            <td>Regina Catholic HS</td>
            <td>So.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>2A 3rd Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Reise Neuhaus</strong>
            </td>
            <td>Anamosa HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>3A 4th Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sam Schrage</strong>
            </td>
            <td>Clear Creek Amana HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference WAMAC</li>
                <li>Academic All-State by Iowa Coaches Association</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sidney Slay</strong>
            </td>
            <td>Iowa City High HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sophia Austen </strong>
            </td>
            <td>Iowa City West HS</td>
            <td>Fr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sophie Buysse</strong>
            </td>
            <td>West Liberty HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>All District Team by Iowa Coaches Association</li>
                <li>3A 4th Team All-State by Iowa Coaches Association</li>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Stella Smith</strong>
            </td>
            <td>Pleasant Valley HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference MAC</li>
                <li>5A 3rd Team All-State by Iowa Coaches Association</li>
                <li>All District Team by Iowa Coaches Association</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Sydney Wagner</strong>
            </td>
            <td>Regina Catholic HS</td>
            <td>Sr.</td>
            <td>
              <ul>
                <li>1st Team All Conference RVC</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Taylor Ray</strong>
            </td>
            <td>Prairie HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>Honorable Mention All Conference MVC</li>
                <li>2nd Team All -Metro</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Yasmine Sell</strong>
            </td>
            <td>Solon HS</td>
            <td>Jr.</td>
            <td>
              <ul>
                <li>2nd Team All Conference WAMAC</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  )
}

export default Home
