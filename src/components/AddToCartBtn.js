// import { Button } from "@mui/material";
// import { useState, useEffect } from "react";


// const AddToCartBtn = (props) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   const addItemToCart = (item) => {
//     const updatedCart = [...cart, item];
    
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);

//   };

//   const { product } = props;

//   const handleAddToCartButton = () => {
//     addItemToCart(product);

//   };

//   return <Button onClick={handleAddToCartButton}>Add To Cart</Button>;
// };

// export default AddToCartBtn;

import { Button } from '@mui/material';
import React from 'react';

const AddToCartBtn = ({productName, productPrice, productId,cartState, handleSetCart}) => {
      const productCart = {
      productId: productId,
      productName: productName,
      productPrice: productPrice
    }
  const handleAddToCart = () => {
    // Retrieve existing cart data from local storage or initialize an empty array
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProduct = cartData.find(item => item.productId === productId);

    if (existingProduct) {
      // If the product already exists, update its quantity
      existingProduct.quantity += 1;
    } else {
      // Otherwise, add the product to the cart with a quantity of 1
      cartData.push({ ...productCart, quantity: 1 });
    }
    handleSetCart();
    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  return (
    <Button onClick={handleAddToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
