import React, { useState } from 'react';
import BlinkingImages from "./BlinkingImages";
import './About.css';
import ReactPlayer from 'react-player';

const About = () => {
  const images = [
   "https://tse2.mm.bing.net/th?id=OIP.KFZge-ZRIUloUBkwgrfxgwHaCp&pid=Api&P=0",
"https://tse3.mm.bing.net/th?id=OIP.kYwK9y3fJRYHH9k3Lz4TDAHaDW&pid=Api&P=0",
"https://tse4.mm.bing.net/th?id=OIP.XS7YaPKqWP4fKwnzmID2tAHaE7&pid=Api&P=0"

    
  ];

  const [videoUrl] = useState("https://istart.rajasthan.gov.in/public/videos/Startup_Policy_Launch.mp4");

  return (
    <>
    <h1 className='start'>WE PROVIDE YOU THE TOOL JUST SHOW WILL POWER AND START YOUR STARTUP IN RAJESTHAN</h1>
      <div className='container'>
        <BlinkingImages images={images} />
      </div>
      <div className='video-container'>
        <ReactPlayer url={videoUrl} controls />
      </div>
      <h1>TOP 10 STARTUPS OF RAJESTHAN</h1>
      <div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">1) GirnarSoft</p>
      <p className="title">Started in: 2007</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b7d3e30d999bfb7bf2_girnarsoft_com__49ed30f7f810.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">2) Haqdarshak</p>
      <p className="title">Started in: 2015</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b726513bb9310ced48_www_haqdarshak_com__043ca249d23e.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">3) Voylla</p>
      <p className="title">Started in: 2012

</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b73f64477b8af663da_www_voylla_com_ac972b37f91a.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">4) ASG Eye Hospital</p>
      <p className="title">Started in: 2005</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b74e20a160b57f8781_asgeyehospital_com__beb58697cb6b.jpeg" alt="article-cover"/>
</div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">5) Finova Capital</p>
      <p className="title">Started in: 2015</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b7f3f7793debf8b2e9_finova_in_index_php_53476b1c6c96.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">6) CollegeDekho
</p>
      <p className="title">Started in: 2010
Founders: Ruchir Arora</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b77bd0337cc56c64f5_www_collegedekho_com__cda69e53ac07.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">7) Kirana King</p>
      <p className="title">Started in: 2015</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b76f187c24b9b7f904_www_kiranaking_com__3af94067eda4.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">8) Kogta Financial India Limited</p>
      <p className="title">Started in: 1996</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b7f7b752d3a59fc0d0_www_kogta_in__4f5dadfe3957.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">9) Wholesalebox</p>
      <p className="title">Started in: 2015</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b757a4740aa847507a_www_wholesalebox_in__98181a7b2c14.jpeg" alt="article-cover" />
  </div>
</div>
<div className="center">
  <div className="article-card">
    <div className="content">
      <p className="date">10) Frontier Markets
</p>
      <p className="title">Started in: 2011</p>
    </div>
    <img src="https://global-uploads.webflow.com/5fadb14c46b287ad224b60b9/611568b8292a34bf00d2b778_www_frontiermkts_com__cf1c1a003d71.jpeg" alt="article-cover" />
  </div>
</div>

<div className="car4-container">

  <div className="car4">
    <h3>Funding Incentives</h3><br/>
    <p>The government had introduced an assessment program for Startups, QRate Startup rating, which provides detailed assessment report on Startup’s potential and investment worthiness. The rating is based on assessment score and varies from Bronze, Silver, Gold, Platinum to Signature. The rating shall be used to grade eligible startups in order to provide differential incentives to each category as part of the policy.</p>
    <div className="layers">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>   
    </div>
  </div> 


</div>

<div className="car4-container">
  <div className="car4">
    <h3>Rajiv Gandhi Innovation Award</h3><br/>
    <p>To leverage the capacity of Startups in Rajasthan to develop out of the box solutions for addressing issues prevailing in the society/state the Government conducts Rajiv Gandhi Innovation Challenge. The departments will share the challenges to participant Startups or the Startup can come up with their own problem statement relevant to the theme. The jury will decide the winners based on criteria, as notified by the Government from time to time and will be awarded as below:</p>
    <div className="layers">
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>
      <div className="layer"></div>   
    </div>
  </div> 
</div>
<h1>EVENTS FOR STARTUPS</h1>

<div className="container2">
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16767480369564.jpg" alt="notfound"/>
    <div className="car5__content">
      <h4>National Startup Day Celebration</h4>
      <p>
      Jan 16, 2023 - Feb 16, 2023
 iStart Nest Bharatpur
      </p>
     
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16692012928717.jpeg" alt="notfound"/>
    <div className="car5__content">
      <h4>Tech Summit</h4>
      <p>
      Dec 01, 2022
 Bhamashah Techno Hub
      </p>
      
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16697898102948.jpeg" alt="notfound"/>
    <div className="car5__content">
      <h4>Tête-à-Tête with Ms. Namita Thapar</h4>
      <p>
      Dec 03, 2022
 Techno Hub Jaipur


      </p>
     
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16686870237380.png" alt="notfound"/>
    <div className="car5__content">
      <h4>AWS Moonshot Days</h4>
      <p>
      Nov 28, 2022
 Techno Hub
      </p>
     
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16767044065469.jpg" alt="notfound"/>
    <div className="car5__content">
      <h2>Digifest Jodhpur</h2>
      <p>
      Nov 11, 2022 - Nov 13, 2022
 Government Polytechnic Jodhpur
      </p>
     
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16768967636075.jpg" alt="notfound"/>
    <div className="car5__content">
      <h2>Startup Conclave - Invest Rajasthan Summit 2022</h2>
      <p>
      Oct 07, 2022
 Mukundara Hall (JECC Sitapura Jaipur)
      
      </p>
     
    </div>
  </div>
  <div className="car5">
    <img src="https://istart.rajasthan.gov.in/public/uploads/events/16624627743895.jpeg" alt="notfound"/>
    <div className="car5__content">
      <h4>TiE Smash Up</h4>
      <p>
      Sep 16, 2022 - Sep 17, 2022
 Hotel Royal Orchid Tonk Road Jaipur
      
      </p>
     
    </div>
  </div>


 
</div>
<footer>


  <div className='timeshow'><span id="current-time"></span></div>

</footer>



      

    </>
  )
}

export default About;
