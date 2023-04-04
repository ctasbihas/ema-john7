import React from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  React.useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // Step 1: Get id
    for (const id in storedCart) {
      // Step 2: Get the product by using id
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        // Step 3: Get the quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products])

  const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
    addToDb(product.id);
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map((product, index) => <Product key={index} product={product} handleAddToCart={handleAddToCart} />)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
