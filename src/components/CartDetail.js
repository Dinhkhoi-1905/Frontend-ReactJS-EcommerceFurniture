// import { useEffect, useState } from "react";
// const CartDetail = () => {
//     const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//     return (
//         <div>
//             {cartItem.map(item => (
//                 <p>{item.name}</p>
//             ))}
//         </div>
//     );
// };
// export default CartDetail;
import { useState, useEffect } from "react";
import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";

const CartDetail = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // setCart(storedCart);
    setCart(() => storedCart);
  }, [localStorage.getItem("cart")]);
//   useEffect(() => {
//   }, [cart]);

  const removeItemFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
              <Button variant="contained" color="error" onClick={() => removeItemFromCart(index)}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CartDetail;