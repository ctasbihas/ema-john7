import React from 'react';
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const tax = totalPrice*6/100;
    const grandTotal = totalPrice+totalShipping+tax;

    return (
        <>
            <h2 className="cart-title">Order Summary</h2>
            <div className="cart-details">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax ? tax.toFixed(2) : tax}</p>
                <h3>Grand Total: ${grandTotal ? grandTotal.toFixed(2) : grandTotal}</h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button isRed>Clear Cart <FontAwesomeIcon icon={faTrash} /></Button>
                    <Button>Review Order <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </div>
        </>
    );
};

export default Cart;