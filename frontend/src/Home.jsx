import { useState } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom';
import Logo from './assets/logo.png';

function Home() {

  const navigate = useNavigate();

  const handleHome = async() => {
      navigate('/')
  }

  const handleShop = async() => {
    navigate('/Shop')
}

  return (

    <div className='home-container'>

      <div className='Home-Container'>

        <div className='Navbar-Container'>
          <div className='logo-home'></div>
          <nav className='nav-links-home'>
            <li className="links-home" onClick={handleHome}>
            Home
            </li>
            <li className="links-home">
            About Us
            </li>
            <li className="links-home" onClick={handleShop}>
            Shop
            </li>
            <li className="links-home">
            Contact Us
            </li>
            <li className="links-home">
            Cart
            </li>
          </nav>
        </div>

      </div>

      <div className='popular-products-container'>
        <div className='popular-products-text'>OUR BEST SELLERS</div>
      </div>

      <div className='about-us-container'>

        <div className='story-container'>

          <div className='story-container-our-story'>
            <div className='story-container-title'>OUR STORY</div>
            <span className='story-container-text'>We believe that everyone should have equal opportunity to eat healthy, without having to break the bank. We strive to source premium local products at the most affordable prices for your convenience.</span>
          </div>

          <div className='story-container-our-story'>
            <div className='story-container-title'>WHO WE ARE</div>
            <span className='story-container-text'>At Nuts4Us, we bridge the gap between suppliers and retailers, ensuring you have access to a vast variety of affordable nuts, seeds, and dried fruits. We are dedicated to providing you with nutritious and delicious options that are available for pickup at your nearest location.</span>
          </div>

        </div>

        <div className='apart-container'>
          <div className='apart-container-title'>WHAT SETS US APART</div>
          <span className='apart-container-text-title'>High Quality Products</span>
          <span className='apart-container-text'>
            Nuts4Us will source the finest quality products to ensure superior taste and nutritional value.
          </span>
          <span className='apart-container-text-title'>Product Variety</span>
          <span className='apart-container-text'>
            We offer a wide range of nuts, dried fruits, nut butters, and seeds to cater for diverse preferences.
          </span>
          <span className='apart-container-text-title'>Sustainability Focus</span>
          <span className='apart-container-text'>
            At Nuts4Us, we prioritize responsible sourcing, actively supporting local farmers and embracing eco-friendly practices with recyclable packaging.
          </span>
          <span className='apart-container-text-title'>Competitive Pricing</span>
          <span className='apart-container-text'>
            We believe that everybody should have access to heathy foods at affordable prices, which is why we strive to offer competitive pricing. Your health matters.
          </span>
        </div>

        <div className='mission-container'>
          <div className='mission-container-title'>OUR MISSION</div>
          <span className='mission-container-text'>To provide high-quality, delicious and nutritious products to health conscious individuals seeking convenient and tasty snack options. With a strong focus on customer satisfaction and a commitment to sustainability, Nuts4Us aims to become a trusted brand in the health snack industry</span>
        </div>
        
      </div>

      <div className='home-footer-container'>

        <div className='footer-column'>
          <div className='logo-home'>
              <img src={Logo} alt="logo" />
          </div>
        </div>

        <div className='footer-column'>

        </div>

        <div className='footer-column'>

        </div>

        <div className='footer-column'>

        </div>

      </div>

    </div>
  )
}

export default Home