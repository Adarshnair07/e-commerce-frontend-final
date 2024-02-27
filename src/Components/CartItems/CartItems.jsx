import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const {products} = useContext(ShopContext);
  const {cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  const stripekey = "pk_test_51OdV2YSAc9LVRLLZD212ihUETHi7EwaoqRrzn841ewyh04wBPth7J6g4ig1qbQZKlvGlX3HCesOH8eE1jrHDA2YO00djIKh0ps"
  const navigate = useNavigate();
  
  const onToken = (token) => {
    console.log(token)
    alert('Your Payment has been processed');
    navigate('/');
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        {/* <p>Size</p> */}
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>₹{e.new_price}</p>
                      <button className="cartitems-quatity">{cartItems[e.id]}</button>
                      <p>₹{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          
          <StripeCheckout
            name="Shoe Checkout"
            description="Please fill in the details below"
            amount={getTotalCartAmount() * 100}
            currency="INR"
            stripeKey={stripekey}
            token={onToken}
            billingAddress
          
          ><button>PROCEED TO CHECKOUT</button></StripeCheckout>
        </div>
        {/* <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CartItems;
