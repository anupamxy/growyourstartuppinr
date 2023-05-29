import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [isBlinking, setIsBlinking] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const currentTimeRef = useRef(null);

  const handleTextClick = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(isBlinking => !isBlinking);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTime = `${hours}:${minutes}:${seconds}`;

    if (currentTimeRef.current) {
      currentTimeRef.current.textContent = currentTime;
    }

    const timeElement = document.getElementById('current-time');

    if (timeElement) {
      const currentTime = new Date().toLocaleTimeString();
      timeElement.textContent = currentTime;
    }
  }

  updateTime(); // set initial value
  setInterval(updateTime, 1000); // update every second
  return (
    <>
      <h1>LETS  INVEST OVER RAJESTHAN</h1>
      <div className="card-group">
  <div className="card">
  <img
  className='card-img-top'
        src="https://tse4.mm.bing.net/th?id=OIP.wHv9gcs5F1d_FN_zvnTW1gHaE7&pid=Api&P=0"
        alt="Blinking "
        style={{ visibility: isBlinking ? 'visible' : 'hidden' }}
      />
    <div className="card-body">
      <h5 className="card-title">INVESTOR ADVANTAGES</h5>
     <ul >
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>RICH NATURAL RESOURCES</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>UNPARALLELED MARKET ACCESS</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>EASE OF DOING BUSINESS</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>INFRASTRUCTURE EDGE</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>SKILLED MANPOWER</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>COSMOPOLITAN LIFE</li>
     </ul>

    </div>
  </div>
  <div className="card">
  <img
    className='card-img-top'
        src="https://tse3.mm.bing.net/th?id=OIP.s7qCOmNJIWxa16nKesaMfQHaEj&pid=Api&P=0"
        alt="Blinking "
        style={{ visibility: isBlinking ? 'visible' : 'hidden' }}
      />
    <div className="card-body">
      <h5 className="card-title">POLICY IN RAJESTHAN</h5>
      <ul >
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan MSME Policy 2022</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Startup Policy 2022</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Investment Promotion Scheme (RIPS) 2022</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Film Tourism Promotion Policy 2022</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Wind & Hybrid Energy Policy 2019</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Ecotourism Policy 2021</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Industrial Development Policy 2019</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan Investment Promotion Scheme (RIPS) 2019</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Rajasthan MSME (Facilitation of Establishment and Operation) Act 2019</li>
     </ul>
      
   
    </div>
  </div>
  <div className="card">
  <img
    className='card-img-top'
        src="https://tse2.mm.bing.net/th?id=OIP.EkgLPsvw3VWTCpL_aOCfzQHaE8&pid=Api&P=0"
        alt="Blinking "
        style={{ visibility: isBlinking ? 'visible' : 'hidden' }}
      />
    <div className="card-body">
      <h5 className="card-title">POWER OF RAJESTHAN</h5>
      <ul >
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>7TH Largest economy</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>North-western India; shares domestic borders with the states of Punjab, Haryana, Uttar Pradesh, Madhya Pradesh and Gujarat</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>342,239 sq. km. (Largest state in India)</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Districts(33)</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>State Capital(Jaipur)</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>State Capital(INR 11,96,137 crore (at current prices: 2021-22))</li>
      <li onClick={handleTextClick} className={isHovered ? 'hovered' : ''}>Major Exports(Gems & Jewellery, Woolen Carpets, Hand-Printed Apparels & Furnishings, Tie & Dye Clothes, Handicraft Articles, Marble, Granite, and Engineering Goods)</li>

     </ul>
    </div>
  </div>
</div>
<h1>WE WELCOME YOU  TO INVEST IN RAJETHAN</h1>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <ol className="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://invest.rajasthan.gov.in/public/assets/image-gallery/state-data-centre-in-jaipur.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://invest.rajasthan.gov.in/public/assets/image-gallery/dedicate-freight-corridor.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://invest.rajasthan.gov.in/public/assets/image-gallery/saint-gobains-glass-plant.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>

</div>
<h1>SECTOR FOR INVESTMENT IN RAJESTHAN</h1>
<div className="ag-format-container">
  <div className="ag-courses_box">
    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        AGRI AND AGRO PROCESSING
     
        </div>

        <div className="ag-courses-item_date-box">
          <h9>Rajasthan is a leading producer of a large variety of crops, horticulture & animal products with potential for processing and value addition.</h9>
          {/* <span className="ag-courses-item_date">
          
          </span> */}
        </div>
      </button>
    </div>

    <div className="ag-courses_item">
     <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        AUTO, AUTO COMPONENTS & EV
        </div>

        <div className="ag-courses-item_date-box">
          <h9>Rajasthan is home to more than 100 automotive and auto-component manufacturing units.</h9>
        
        </div>
      </button>
    </div>

    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        ELECTRONICS SYSTEM DESIGN & MANUFACTURING
        </div>

        <div className="ag-courses-item_date-box">
          <h9>For domestic and trans-national manufacturer’s eyeing a share of this huge market, Rajasthan is a natural choice</h9>
         
        </div>
      </button>
    </div>

 
    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        MEDICAL & HEALTH
        </div>

        <div className="ag-courses-item_date-box">
    <h9>Rajasthan’s path-breaking Mukhyamantri Chiranjeevi Swasthya Bima Yojana – provides for health insurance cover to every family, i.e. all 80 million residents of the state</h9>
        </div>
      </button>
    </div>

    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        IT & ITES
        </div>

        <div className="ag-courses-item_date-box">
          <h9>
        <ul>
          <li>Mahindra World City(In Jaipur)</li>
          <li>Fintech Park(An integrated Park to be spread over 37 hectares is being planned in Jaipur)</li>
          <li>Rajasthan Investment Promotion Scheme (RIPS) 2019</li>
        </ul>
        </h9>
        </div>
      </button>
    </div>

    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        MINES, MINERALS AND CERAMICS
        
</div>
<div className="ag-courses-item_date-box">
         <h9>
          <ul>
            <li>#2Mineral Producing State with 81 major and minor minerals</li>
            <li>Largest producer of marble in the country</li>
            <li>Sole producer of Zinc and Lead in the countrys</li>
            </ul>
</h9>
</div>
        
      </button>
    </div>
    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        RENEWABLE ENERGY
        </div>

        <div className="ag-courses-item_date-box">
        <h9>
With the highest installed solar generation capacity (over 8000 MW), it leads India’s renewable energy bandwagon. The state is also among the top five states in India in terms of installed wind generation capacity. </h9>
        </div>
      </button>
    </div>

    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        TOURISM
        </div>

        <div className="ag-courses-item_date-box">
         <h9>Rajasthan is one of the most popular tourist destinations in the world attracting millions of tourist’s every year. A bouquet of attractions makes Rajasthan the most compelling destination for investment in this sector.</h9>
        </div>
        </button>
    </div>
    <div className="ag-courses_item">
   <button className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
        CHEMICAL & PETROCHEMICAL
        </div>

        <div className="ag-courses-item_date-box">
         <h9>Rajasthan is the largest on-shore producer of Crude Oil and second largest producer of Natural Gas in India.A 9 MMTPA Refinery cum Petrochemical Complex is being constructed by HPCL Rajasthan Refinery Limited (HRRL) at Pachpadra in Barmer district in the state.</h9>
        </div>
        </button>
    </div>

  </div>
  </div>
  <div className="car1" >
  <img src="https://invest.rajasthan.gov.in/storage/app/public/photos/cm-rajasthan.jpg" className="card-img-top" alt="...."/>
  <div className="card-body">
    <h5 className="card-title">Ashok Gehlot
Chief Minister, Rajasthan</h5>
    <p className="card-text">Invest Rajasthan 2022 is the manifestation of our commitment to building enduring partnerships with private enterprise for development of the state and prosperity of our people. It is an important milestone towards delivering on the commitments made by us to investors.

I invite you to experience and benefit from the bouquet of exciting opportunities Rajasthan has to offer, and to join us in building a promising future for all of us.</p>
    
  </div>
</div>
<div className="car2" >
  <img src="https://invest.rajasthan.gov.in/storage/app/public/photos/industry-minister.jpg" className="card-img-top" alt="...."/>
  <div className="card-body">
    <h5 className="card-title">Shakuntla Rawat
Industries and Commerce
Minister, Rajasthan</h5>
    <p className="card-text">We invite you to build on the numerous advantages Rajasthan has to offer to you in its human capital, excellent market access, India's largest industrial land-bank and attractive investment incentives..</p>
    
  </div>
</div>
 <footer>


  <div className='timeshow'><span id="current-time"></span></div>

</footer>



  </>
  );
};
    
export default Home;

  

  

  