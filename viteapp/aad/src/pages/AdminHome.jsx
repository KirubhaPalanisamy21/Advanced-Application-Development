import React from 'react';
import '../assets/css/AdminHome.css';
import ImageGallery from '../components/ImageGallery';
import Service from './Service';
import Contact from './Contact';
import Providers from '../components/Providers';
import AdminNavbar from '../components/AdminNavbar';
import AdminAbout from './AdminAbout';

function AdminHome() {
  return (
    <>
        <div>
          <AdminNavbar />
        </div>
        <div className='usermain' id='AdminHome'>
          <div className="userhome">
            <div className="homeright"><img src='https://nhhs-mweb-new.s3.ap-south-1.amazonaws.com/images/elder-care-1566366748.jpg' alt='golden year image' className='image-0'/>
              <div className='leftcontent'>
                <h1 style={{ color: 'black' }}>Golden Years Companion<br></br> Your Home, Your Health, Our Care</h1><br></br>
                <h3 style={{ color: "black" }}>Customized In-Home Care Solutions Catering <br></br> Each Stage of the Senior Experience</h3>
                <br></br>
                To care for those who once cared for us is <br></br>one of the highest honours,"
                <br></br>- Tia Walker.
                <br></br>
                We at Golden Home Healthcare endeavor to bring<br></br> healthcare to the doorstep of the elderly.
                <br></br><br></br>
                Once your home care needs are clearly defined, our dedicated team <br></br>will help you get expert health care along with
                attendants<br></br> if needed for personal hygiene, mobility, or activities of daily living<br></br> like taking a bath, feeding,
                exercise, etc...
              </div>
            </div>
          </div>
        </div>
        <ImageGallery />
        <Service />
        <Providers />
        <AdminAbout />
        <Contact />
        <footer>
          <div className="footer">
            <div className="row">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" className="custom-icon fa fa-twitter"></a>
              <a href="https://www.google.com/" target="blank" className="custom-icon fa fa-google "></a>
              <a href="https://www.linkedin.com/" target="blank" className="custom-icon fa fa-linkedin "></a>
              <a href="https://www.youtube.com/" target="blank" className="custom-icon fa fa-youtube "></a>
              <a href="https://www.instagram.com/" target="blank" className="custom-icon fa fa-instagram "></a>

            </div>

            <div className="row">
              Golden Years Copyright @ 2024  KIRUBHA -
              All rights reserved || Designed By: KIRUBHA
            </div>
          </div>
        </footer>
    </>
  );
}

export default AdminHome;
