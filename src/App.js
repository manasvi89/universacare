import logo from './logo.svg';
import './App.css';
import info from "./images/circle-infor.svg";
import ucl from "./images/UCLogo.svg";
import phone from "./images/phone.svg"
import loc from "./images/map-pin.svg"
import card1 from "./images/Careviger1.svg"
import card2 from "./images/Careviger2.svg"
import card3 from "./images/Careviger3.svg"
import card4 from "./images/Careviger4.svg"
import hc from "./images/healthcare.svg"
import fb from "./images/facebook.svg"
import ig from "./images/instagram.svg"
import ld from "./images/linkedin.svg"
import tr from "./images/twitter.svg"
import im1 from "./images/feature1.svg"
import im2 from "./images/feature2.svg"
import im3 from "./images/feature3.svg"
import im4 from "./images/feature4.svg"
import im5 from "./images/feature5.svg"
import im6 from "./images/feature6.svg"
import im7 from "./images/feature7.svg"

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function display_menu(e){
 
}
class App extends Component{

  
  componentDidMount(){
    const togglebutton = document.getElementsByClassName('toggle-button')[0]
    const links = document.getElementsByClassName('nav_com')[0]
    togglebutton.addEventListener('click', () => {
      links.classList.toggle('active');
    })
  }
render(){
 
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="frame1">
        <div id="header">
          <div id="notibar">
            <div id="noti-and">
              <img id="inf-logo" src={info} alt="Information"/>
              <span id="info">READ ABOUT OUR COVID-19 PRECAUTIONS</span>
            </div>
          </div>
          <div id="navbar" >
            <img id="logo" src={ucl} alt="Logo"/>
            <nav id="list" class="navbar" >
                <a href="#"  class="toggle-button">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </a>
                <ul>
                <li class="nav_com" id="a1"><a href="#">ABOUT</a></li>
              
                <li class="nav_com" id="a2" ><a href="#">SERVICES</a></li>
            
                <li class="nav_com" id="a3"><a href="#">RESOURCES</a></li>
              
                <li class="nav_com" id="a4"><a href="#">CAREERS</a></li>
                
                <li class="nav_com" id="a5"><a href="#">HOME CARE HEROS</a></li>
          
                <li class="nav_com" id="a6"><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <div id="contact-num">
                <img id="phone-img" src={phone} alt="Phone" />
                <span id="num_text">866-986-3356</span>
            </div>
          </div>
        </div>
          <div id="home">
            <div id="rectangle">
            <span id="Future">The Future of Health Care is Home Care</span>
            <span id="trust">Over a Decade of Trusted Care.</span>
            <button id="req-but"><button id="in-button"><span id="req-txt">REQUEST AN APPOINTMENT</span></button></button>
            <div id="pht"></div>
          </div>
          </div>
          <div id="footer">
            <div id="foot">
              <div id="round"><img src={loc} alt="Location"/></div>
              <span id="loc-text">UNIVERSACARE AREAS OF COVERAGE</span>
          </div>  
        </div>
      </div>
      <div id="carousel">
            <Carousel>
                <div>
                    <img src={im1} />
                    <h2>Hourly Home Care</h2>
                    <p >4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                </div>
                <div>
                    <img src={im2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={im3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>
      <div id="frame2">
        <div id="fr2-tx">
            How We Find  <span id="best">Best Caregiver</span> For You
        </div>
        
        <div id="cards-row">
        <div id="design">
            <div id="v1"></div>
            <div id="v2"></div>
            <div id="v3"></div>
        </div>
            <div id="c1">
              <div id="im1"><img  src={card1} alt="Icon"/></div>
              <div id="p1">
                  <div id="t1">
                  1. Initial Consultation
                  </div>
                  <div id="tx1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                  </div>
              </div>
            </div>

            <div id="c2">
              <div id="im2"><img  src={card2} alt="Icon"/></div>
              <div id="p2">
                  <div id="t2">
                  2. Customized Care Plan
                  </div>
                  <div id="tx2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                  </div>
              </div>
            </div>

            <div id="c3">
              <div id="im3"><img  src={card3} alt="Icon"/></div>
              <div id="p3">
                  <div id="t3">
                  3. Caregiver Matching
                  </div>
                  <div id="tx3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                  </div>
              </div>
            </div>

            <div id="c4">
              <div id="im4"><img  src={card4} alt="Icon"/></div>
              <div id="p4">
                  <div id="t4">
                  4. Ongoing Support & Supervision
                  </div>
                  <div id="tx4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                  </div>
              </div>
            </div>
        </div>

        <div id="frame3">
            <div id="chap">
              <div id="ch-logo">
              </div>

              <div id="ch-info">
                  <div id="ch-title">
                  CHAP Accreditation and this line can be about this big
                  </div>
                  <div id="ch-para">
                  UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates. 
                  </div>
              </div>
            </div>
        </div>
        <div id="frame4">
          <div id="review">
              <div id="star">
                  <div id="val">
                    5.0
                  </div>
                  <div id="st-pic">
                    <span id="st1">☆</span>
                    <span id="st2">☆</span>
                    <span id="st3">☆</span>
                    <span id="st4">☆</span>
                    <span id="st5">☆</span>
                  </div>
                  <div id="desc">
                  2,054 verified customers reviews by <span id="google">Google.</span>
                  </div>
              </div>
          </div>
          <div id="pplrvw">
            <div id="r1">
              <div id="r11">
                  <div id="al-st">
                    <div id="al-nm">
                    Alvin Stanley
                    </div>
                    <div id="al-st">
                    <span id="st11">☆</span>
                    <span id="st12">☆</span>
                    <span id="st13">☆</span>
                    <span id="st14">☆</span>
                    <span id="st15">☆</span>
                    </div>
                  </div>
                  <div id="al-tx">
                  Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help. 
                  </div>
              </div>
            </div>
            <div id="r2">

            </div>
            <div id="r3">

            </div>
          </div>
        </div>

        <div id="frame5">
            <div id="appointment">
              <div id="app-txt">
              WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND
              </div>
              <button id="app-button">
                <button id="in-but">
                  <div id="but-txt">
                  REQUEST AN APPOINTMENT
                  </div>

                </button>
              </button>
            </div>

            <div id="pic-app">
                <img id="hc-pic" src={hc} alt="Healthcare"/>
            </div>

        </div>

        <div id="frame6">
            <div id="side-info">
                <div id="hq">
                  <div id="hq-title">
                      <div id="hq-txt">
                        HEADQUATERS
                      </div>
                      <div id="hq-line">
                      </div>
                  </div>
                  <div id="add">
                  246-50 57th Drive <br></br>
                  Douglaston, NY 11362<br></br>
                  hello@universacare.com<br></br>
                  P: (718) 224-3758<br></br>
                  F: 8777999065<br></br>
                  </div>
                  <div id="uni-logo">
                    
                  </div>
                </div>
                <div id="sc">
                    <div id="title-sc">
                      <div id="services">
                            <div id="ser-text">
                            SERVICES
                            </div>
                            <div id="ser-line">

                            </div>
                      </div>
                      <div id="company">
                          <div id="com-txt">
                            COMPANY
                          </div>
                          <div id="com-line">

                          </div>
                      </div>
                    </div>
                    <div id="info-sc">
                        <div id="ser-info">
                            <div id="itm1">
                                <div id="cir1">
                                </div>
                                <div id="inf1">
                                  Hourly Care
                                </div>
                            </div>
                            <div id="itm2">
                                <div id="cir2">
                                </div>
                                <div id="inf2">
                                  Daily Care
                                </div>
                            </div>
                            <div id="itm3">
                                <div id="cir3">
                                </div>
                                <div id="inf3">
                                  Hospital to Home
                                </div>
                            </div>
                            <div id="itm4">
                                <div id="cir4">
                                </div>
                                <div id="inf4">
                                  Respite Care
                                </div>
                            </div>
                            <div id="itm5">
                                <div id="cir5">
                                </div>
                                <div id="inf5">
                                  Specialized Care
                                </div>
                            </div>
                        </div>
                        <div id="com-info">
                        <div id="itm6">
                                <div id="cir6">
                                </div>
                                <div id="inf6">
                                About us
                                </div>
                            </div>
                            <div id="itm7">
                                <div id="cir7">
                                </div>
                                <div id="inf7">
                                  Location
                                </div>
                            </div>
                            <div id="itm8">
                                <div id="cir8">
                                </div>
                                <div id="inf8">
                                  Caregivers
                                </div>
                            </div>
                            <div id="itm9">
                                <div id="cir9">
                                </div>
                                <div id="inf9">
                                  News & Blog
                                </div>
                            </div>
                            <div id="itm10">
                                <div id="cir10">
                                </div>
                                <div id="inf10">
                                  Contact Us
                                </div>
                            </div>
                            <div id="itm11">
                                <div id="cir11">
                                </div>
                                <div id="inf11">
                                  FAQ
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="email-sub">
                <div id="get-mail">
                  <label id="sign-up" for="fname">Sign up to receive the latest articles</label>
                  <input type="text" id="email" name="email" placeholder="Your email address"/>
                </div>
                <div id="sub-div">
                  <button id="sub-butt"><span id="sub-txt"> SUBMIT</span></button>
                </div>
            </div>
            <div id="logos">
              <div id="logo1">

              </div>
              <div id="logo2">

              </div>
            </div>
            <div id="social">
              <div id="follow">
                Follow Us
              </div>
              <div id="Icons">
                <img id="fb" src={fb} alt="Facebook Icon"/>
                <img id="ig" src={ig} alt="Instagram Icon"/>
                <img id="ld" src={ld} alt="Linkedin Icon"/>
                <img id="tr" src={tr} alt="Twitter Icon"/>
              </div>
            </div>
            <div id="line">

            </div>
            <div id="copyright">
            Copyright 2020 <span id="uccare">Universacare</span> - All rights reserved.
            </div>
        </div>

      </div>
  </div>  
  )
}
}
export default App;
