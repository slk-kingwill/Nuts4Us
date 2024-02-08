import React, { useState, useEffect } from 'react';
import './ProductCards.css'
import {useNavigate} from 'react-router-dom';

const CardContents = ({products, data}) => {

    const navigate = useNavigate();

    const openProduct = () => {
        navigate(`/Product`, { state: { products, data } });
    };

    const imageName = products.name.replace(/\//g, 'or')
    let imagePath = `../public/pics/${imageName}.png`;

    return (

        <div className='product-card' onClick = {openProduct}>
            <div className='product-title'>{products.name}</div>
            {imagePath && <img src={imagePath} alt={products.name} className='product-image' />}
            <div className='product-price'>{products.price}</div>
        </div>
    );
};

const ProductCards = ({data}) => {
    
    return (
                <div className='card-container'
                >
                    {Array.isArray(data) &&
                        (data
                        .map((products) => (
                            <div key={products.product_id}>
                            <CardContents products={products} data={data}/>
                            </div>
                        ))
                        )
                    }
                </div>
    );
};

export default ProductCards;