import React from 'react';
import "./Product.css";

const Product = ({ product }) => {
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
            <button className="btn-cart">Add to Cart 🛒</button>
        </section>
    );
};

export default Product;