import React from 'react'
import './Footer.css'
import new_logo from '../Assets/new_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={new_logo} alt=""/>
        <p>AberRange</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Visit Us</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt=""/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
