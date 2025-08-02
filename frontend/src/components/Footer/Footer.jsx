import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quia possimus, consequuntur tempore at illum dolores quibusdam? Odit dolorum in beatae facere? Quam, obcaecati?
                </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                 </ul>
            </div>
             <div className="footer-content-right">
                   <h2>Get In Touch</h2>
                   <ul>
                       <li>+1-234-566-7880</li>
                       <li>contact@tomato.com</li>
                   </ul>
             </div>
            
             
        </div>
        <hr />
        <p className='footer-copywrite'>copywrite 2025 @ Tomato.com -ALL rights are reserved</p>
    </div>
  )
}

export default Footer