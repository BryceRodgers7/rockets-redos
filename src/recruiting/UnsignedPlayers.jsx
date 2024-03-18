import React from 'react';
import imageSrc from '../assets/homepage/18r-berkland-pic1.jpg';
import recruiting from '../assets/common/recruiting.png'

function UnsignedPlayers() {
  return (
    <div class="container">
      <h1 >Unsigned Players</h1>
      <h3>Welcome to the Iowa Rockets Recruiting page for unsigned players. We are VERY happy to speak with college coaches about our Iowa Rockets players. Please contact us, anytime.</h3>
      <div class="centered-img" >
        <img src={recruiting}/>
      </div>

      <p ><b><a href="#2024Grads">Jump to 2024 Graduates</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#2025Grads">Jump to 2025 Graduates</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#2026Grads">Jump to 2026 Graduates</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#2027Grads"> Jump to 2027 Graduates</a></b></p>

      <hr />

      <h2 id="2024Grads">2024 Graduates</h2>
      <img loading="lazy" width="150" height="225" src={imageSrc} alt="18r-berkland-pic1 GONE"/>

      <p><b>Meg Berkland</b><br/>Graduate: 2024<br/>Positions:  DS/Libero<br/>Height:  5′-5″<br/>Attack Reach:  9′-3″<br/>Rockets Team:  Iowa Rockets 18R<br/>Jersey: 4</p>



    </div>
  );
}

export default UnsignedPlayers;
