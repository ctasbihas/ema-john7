import React from "react";
import "./Shop.css";
import Button from "../Button/Button";
import Product from "../Product/Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map((product, index) => <Product key={index} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <h2 className="cart-title">Order Summary</h2>
        <div className="cart-details">
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: ${1140}</p>
          <p>Total Shipping Charge: ${5}</p>
          <p>Tax: ${114}</p>
          <h3>Grand Total: ${1559}</h3>
          <div style={{display: "flex", flexDirection: "column"}}>
            <Button isRed>Clear Cart <FontAwesomeIcon icon={faTrash} /></Button>
            <Button>Review Order <FontAwesomeIcon icon={faArrowRight} /></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
