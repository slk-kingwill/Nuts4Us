import { useState } from 'react'
import './Product.css'
import ProductCards from './components/ProductCards.jsx';
import Logo from './assets/logo.png';
import {useNavigate} from 'react-router-dom';

function Product() {

  const navigate = useNavigate();

  const handleHome = async() => {
      navigate('/')
  }

  const handleShop = async() => {
    navigate('/Shop')
  }

  return (
    <div className='Product-Container'>

      <div className='Navbar-Container-prod'>
        
        <div className='logo-prod'>
            <img src={Logo} alt="logo" />
        </div>

        <nav className='nav-links-prod'>
            <li className="links-prod" onClick={handleHome}>
            Home
            </li>
            <li className="links-prod">
            About Us
            </li>
            <li className="links-prod" onClick={handleShop}>
            Shop
            </li>
            <li className="links-prod">
            Contact Us
            </li>
            <li className="links-prod">
            Cart
            </li>
        </nav>

      </div>

      <div className='product-container'>


      </div>

    </div>
  )
}

export default Product