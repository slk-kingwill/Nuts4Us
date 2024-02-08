import { useState, useEffect } from 'react'
import './Shop.css'
import ProductCards from './components/ProductCards.jsx';
import ProductData from "./components/ProductData.json"
import Logo from './assets/logo.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// Server information
const hostname = 'localhost';
const port = 8080;

const fetchProductCards = async () => {
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {

    await delay(100); //temporary solution for synchronicsation

    const response = await axios.get(`http://${hostname}:${port}/products`);

    //populate user data
    ProductData.products = response.data.products;
    console.info("Fetched data");
    console.log(response.data.products)

    return response.data.products || [];

  } catch (error) {

    console.error("Could not load data:", error.message);
    return ProductData.products;

  }

}

function Shop() {

  // VARIABLES
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  //NAVIGATION
  const handleHome = async() => {
      navigate('/')
  }
  const handleShop = async() => {
    navigate('/Shop')
  }

  // FETCH DATA FUNCTION
  useEffect(() => {

    const fetchData = async () => {
        const fetchedData = await fetchProductCards();
        setData(fetchedData);
    };

    fetchData();

} , [ProductData.products.length] );

// FILTER DATA FUNCTION
  const filterData = () => {
    if (selectedCategory === 'All') {
      return data;
    } else {
      return data.filter((product) => product.category === selectedCategory);
    }
  };

  return (
    <div className='Shop-Container'>

      <div className='Navbar-Container-shop'>
        
        <div className='logo-shop'>
            <img src={Logo} alt="logo" />
        </div>

        <nav className='nav-links-shop'>
            <li className="links-shop" onClick={handleHome}>
            Home
            </li>
            <li className="links-shop">
            About Us
            </li>
            <li className="links-shop" onClick={handleShop}>
            Shop
            </li>
            <li className="links-shop">
            Contact Us
            </li>
            <li className="links-shop">
            Cart
            </li>
        </nav>

      </div>

      <div className='shop-container'>

            <div className='shop-title'>PRODUCTS</div>

            <div className='shop-categories'>
                <button 
                  className={`shop-buttons ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('All')}>All</button>
                <button 
                   className={`shop-buttons ${selectedCategory === 'Nuts' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Nuts')}>Nuts</button>
                <button 
                  className={`shop-buttons ${selectedCategory === 'Dried Fruit' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Dried Fruit')}>Dried Fruit</button>
                <button 
                  className={`shop-buttons ${selectedCategory === 'Granola' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Granola')}>Granola</button>
                <button 
                  className={`shop-buttons ${selectedCategory === 'Seeds' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Seeds')}>Seeds</button>
                <button className='shop-buttons' onClick={() => setSelectedCategory('Other')}>Other</button>
            </div>

            <div className='shop-card-container'>
              <ProductCards data={filterData()}></ProductCards>
            </div>

        </div>

    </div>
  )
}

export default Shop