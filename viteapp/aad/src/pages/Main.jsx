import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Main.css';
import { FaUserPlus } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";

const MainPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const imgGif = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';
    return (
        <div className="main-page-container">
            <div className='mainpageright'>
                <img src={imgGif} className='imgGif' alt='gif' />
            </div>
            <div className='mainpageleft'>
                <h2>Glad to have you - Home care service for seniors!</h2>
                <div className="additional-content">
                    <br></br>
                    <p>
                        We are here to make your home care services that helps you to stay in your own home and maintain your independence as you get older..
                        <br></br>
                
                    </p>
                    <br></br>
                    <h2>Kindly select your role to experience the feature!</h2>

                    <div className='main-buttons'>
                        <div className="button-container">
                            <Link to="/Admin_Login">
                                <button className="admin-button" onClick={() => setSelectedRole('admin')}>
                                    <GrUserSettings style={{ fontSize: '1.5rem', color: "white" }} />
                                    <span style={{fontSize:"100",color:'white'}}>Admin</span>
                                </button>
                            </Link>{' '}

                            <Link to="/UserHome">
                                <button className="user-button" onClick={() => setSelectedRole('user')}>
                                    <FaUserPlus style={{ fontSize: '1.5rem' }} />
                                    <span style={{fontSize:"100",color:'white'}}>User</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                   
                </div>
            </div>

        </div>
    );
};

export default MainPage;
