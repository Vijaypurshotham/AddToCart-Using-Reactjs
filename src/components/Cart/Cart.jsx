import { useEffect, useState } from "react";
import "./Cart.css";
const Cart = ({ cart, setCart, handleChange }) => {
  // ! Below the state is used to calculate the selected item in the cart
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="cart items" />
            <p>{item.title}</p>
          </div>
          <div className="btns">
            <button className="btn1" onClick={() => handleChange(item, +1)}>
              +
            </button>
            <button className="btn3">{item.amount}</button>
            <button className="btn2" onClick={() => handleChange(item, -1)}>
              -
            </button>
          </div>
          <div className="prices">
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="rupees">
        <span>Total Price of Your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
