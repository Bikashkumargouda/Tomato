import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { GrLinkUp } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt, dolores dolor nobis nisi voluptas ab, expedita similique quis quidem sit dicta, quas dignissimos ducimus sunt dolorem? Sint, unde ratione.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7788868075</li>
            <li>kumar.bikash.gouda@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2021 FoodApp. All rights reserved. Made with ❤️ by Bikash. Designed by Bikash.Gouda.  |  Powered by Tomato.  |
      </p>
      <a href="#" className='icon'><GrLinkUp /></a>

    </div>
  )
}

export default Footer