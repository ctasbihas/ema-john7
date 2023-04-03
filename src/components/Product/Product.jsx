import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <section className='product'>
            <img src={img} alt="Image" />
            <div className="product-info">
                <h3 className="name">{name}</h3>
                <p className="price">Price: ${price}</p>
                <div>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} start</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </section>
    );
};

export default Product;