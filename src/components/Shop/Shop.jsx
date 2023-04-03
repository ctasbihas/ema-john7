import React from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  
  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map((product, index) => <Product key={index} product={product} />)
        }
      </div>
      <div className="cart-container">
        <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default Shop;
