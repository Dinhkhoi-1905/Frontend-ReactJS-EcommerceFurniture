
import { useState, useEffect } from "react";
import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";

const CartDetail = ({cartState,handleSetCart}) => {
  const [cart, setCart] = useState([]);
  // const [storedCart, setStoredCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // setStoredCart(JSON.parse(localStorage.getItem("cart")))
    // setCart(storedCart);
    // handleSetCart();
    
    setCart(() => storedCart);
    // console.log('detail: ' + cartState)
  }, [cartState]);
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
              <ListItemText primary={item.productName} secondary={`$${item.productPrice} with quantity: ${item.quantity}`} />
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