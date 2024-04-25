import { useState } from "react";

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleClick = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <h1>The User Count: {cartCount}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Cart;
