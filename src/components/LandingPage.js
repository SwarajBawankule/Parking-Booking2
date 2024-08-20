// src/components/LandingPage.js
import React, { useState } from 'react';
import logo from '../img/logo sepm.png';
import menuIcon from '../img/menu.png';
import pic1 from '../img/pic-1.jpg';
import pic2 from '../img/pic-2.jpg';
import pic3 from '../img/pic-3.jpg';
import pic4 from '../img/pic-4.jpg';
import pic5 from '../img/pic-5.jpg';
import backgroundImg from '../img/background.jpg';

const LandingPage = ({ goToParking }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const bannerStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), #c67ace), url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <style>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    font-family: 'Poppins', sans-serif;
                }
                #banner {
                    background: linear-gradient(rgba(0,0,0,0.5),#c67ace), url(../img/background.jpg);
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                }
                .logo {
                    width: 60px;
                    position: absolute;
                    top: 4%;
                    left: 10%;
                }
                .banner-text {
                    text-align: center;
                    color: #fff;
                    padding-top: 180px;
                }
                .banner-text h1 {
                    font-size: 130px;
                    font-family: 'Lucida Handwriting', cursive;
                }
                .banner-text p {
                    font-size: 20px;
                    font-style: italic;
                }
                .banner-btn {
                    margin: 70px auto 0;
                }
                .banner-btn a {
                    width: 150px;
                    text-decoration: none;
                    display: inline-block;
                    margin: 0 10px;
                    padding: 12px 0;
                    color: #fff;
                    border: .5px solid #fff;
                    border-radius: 15px;
                    z-index: 1;
                    transition: color 0.5s;
                }
                .banner-btn a span {
                    width: 0;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #fff;
                    z-index: -1;
                }
                .banner-btn a:hover span {
                    width: 100%;
                }
                .banner-btn a:hover {
                    color: #000;
                }
                #sideNav {
                    width: 250px;
                    height: 100vh;
                    position: fixed;
                    right: ${isSidebarOpen ? '0' : '-250px'};
                    top: 0;
                    background: #c67ace;
                    z-index: 2;
                    transition: 0.5s;
                }
                nav ul li {
                    list-style: none;
                    margin: 50px 20px;
                }
                nav ul li a {
                    text-decoration: none;
                    color: #fff;
                }
                #menuBtn {
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    position: fixed;
                    right: 30px;
                    top: 20px;
                    z-index: 3;
                    cursor: pointer;
                }
                #menuBtn img {
                    width: 20px;
                    margin-top: 15px;
                }
                /*--feature--*/
                #feature {
                    width: 100%;
                    padding: 70px 0;
                }
                .title-text {
                    text-align: center;
                    padding-bottom: 70px;
                }
                .title-text p {
                    margin: auto;
                    font-size: 20px;   
                    color: #c67ace;
                    font-weight: bold;
                    position: relative;
                    z-index: 1;
                    display: inline-block;
                }
                .title-text p::after {
                    content: '';
                    width: 50px;
                    height: 35px;
                    background: linear-gradient(#eca3f5, #fff);
                    position: absolute;
                    top: -20px;
                    left: 0;
                    z-index: -1;
                    transform: rotate(10deg);
                    border-top-left-radius: 35px;
                    border-bottom-right-radius: 35px;
                }
                .title-text h1 {
                    font-size: 50px;
                }
                .feature-box {
                    width: 80%;
                    margin: auto;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    text-align: center;
                }
                .features {
                    flex-basis: 50%;
                }
                .features-img {
                    flex-basis: 50%;
                    margin: auto;
                }
                .features-img img {
                    width: 70%;
                    border-radius: 15px;
                }
                .features h1 {
                    text-align: centre;
                    margin-bottom: 10px;
                    font-weight: 100;
                    color: #eca3f5;
                     font-family: '	Times New Roman', serif;
                }
                .features-desc {
                    display: flex;
                    align-items: center;
                    margin-bottom: 40px; 
                    font-family: '	Lucida Console', Monospace;
                }
                /*--gallery--*/
                .gallery {
                    width: 100%;
                    padding: 70px 0;
                    background: #727070;
                }
                .gallery-box {
                    width: 80%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    margin: auto;
                }
                .single-gallery {
                    flex-basis: 48%;
                    text-align: center;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    color: #fff;
                    position: relative;
                }
                .single-gallery img {
                    width: 100%;
                    height: 320px;
                    border-radius: 10px;
                }
                .overlay {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    border-radius: 10px;
                    cursor: pointer;
                    background: linear-gradient(rgba(0,0,0,0.4), #c97ace);
                    opacity: 0;
                    transition: 1s;
                }
                .single-gallery:hover .overlay {
                    opacity: 1;
                }
                .contact {
                    width: 100%;
                    padding: 70px 0;
                    background: #727070;
                }
                #About-Us {
                    margin: 75px;
                }
                .team {
                    text-align: center;
                    font-weight: bold;
                    letter-spacing: 2px;
                    color: #c97ace;
                    padding-bottom: 10px;
                }
                .team::after {
                    content: '';
                    background: #eca3f5;
                    display: block;
                    height: 3px;
                    width: 150px;
                    margin: 10px auto;
                }
                .img-box {
                    padding: 20px;
                    margin: 30px;
                }
                .img-responsive {
                    width: 300px;
                    height: 300px;
                    position: relative;
                    left: 480px;
                    border-radius: 12px;
                }
                h2 {
                    text-align: center;
                    color: #eca3f5;
                }
                h3 {
                    text-align: center;
                    color: #eca3f5;
                }
                /* Add more styles for other sections as needed */
                `}
            </style>

            <section id="banner" style={bannerStyle}>
                <img src={logo} className="logo" alt="Logo" />
                <div className="banner-text">
                    <h1 className='cursive-text'>Parkopedia</h1>
                    <p>Life is a journey, but don't worry, you'll find a parking spot at the end</p>
                    <div className="banner-btn">
                        <a href="#" onClick={goToParking}><span></span>Book a Vehical Place</a>
                        <a href="#feature"><span></span>Read More</a>
                    </div>
                </div>
            </section>

            <div id="sideNav">
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#feature">FEATURES</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            
            <div id="menuBtn" onClick={toggleSidebar}>
                <img src={menuIcon} alt="Menu" />
            </div>

      {/* Other sections here */}

      <section id="feature">
            <div class="title-text">
                <p>Features</p>
                <h1>Why Choose Us</h1>
            </div>
            <div class="feature-box">
                <div class="features">
                    <h1>Reliable parking</h1>
                    <div class="features-desc">
                        <p>EAT, SLEEP, PARK, REPEAT! It's as easy as that at parkopedia. At Parkopedia, we pride ourselves on being the most reliable vehicle parking WebApp at no compromise of quality.</p>
                    </div>
                    <h1>Pre Booking Online</h1>
                    <div class="features-desc">
                        <p>Being on-time and making your parking hassle-free is our priority! Book your parking slots and zones in advance with our pre-online booking system to ease your way in getting your parking spots without any sweat.</p>
                    </div>
                    <h1>Affordable Cost</h1>
                    <div class="features-desc">
                        <p>Every single one of us deserves access to quality and standard parking. To get it at an affordable & cheap cost is an added bonus. We, at Parkopedia, are really happy and efficient to provide you the services of both.</p>
                    </div>
                </div>
                <div class="features-img">
                    <img src={pic1} />
                </div>
            </div>
        </section>

      

        <section id="gallery">
            <div class="title-text">
                <p>GALLERY</p>
                <h1>Some Parking Spots</h1>
            </div>
            <div class="gallery-box">
                <div class="single-gallery">
                    <img src={pic2} />
                    <div class="overlay"></div>
                </div>
                <div class="single-gallery">
                    <img src={pic3} />
                    <div class="overlay"></div>
                </div>
                <div class="single-gallery">
                    <img src={pic4} />
                    <div class="overlay"></div>
                </div>
                <div class="single-gallery">
                    <img src={pic5} />
                    <div class="overlay"></div>
                </div>
            </div>
        </section>

        

      <script>
        var menuBtn = document.getElementById("menuBtn")
        var sideNav = document.getElementById("sideNav")
        var menu = document.getElementById("menu")

        sideNav.style.right = "-250px";

        {/* menuBtn.onclick = function(){
          if(sideNav.style.right === "-250px"){
            sideNav.style.right = "0";
            menu.src = "images/cancel.png";
          }
          else{
            sideNav.style.right = "-250px";
            menu.src = "images/menu.png";
          }
        } */}
      </script>
    </div>
  );
}

export default LandingPage;
