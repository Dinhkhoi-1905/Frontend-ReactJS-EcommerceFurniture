// import { Button } from "@mui/material";
// // import { useEffect, useState } from "react";
// const AddToCartBtn = (props) => {
//     function addItemToCart(item) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         // localStorage.setItem('cart', JSON.stringify({product}));
//         cart.push(item);
//         localStorage.setItem('cart', JSON.stringify(cart));
//       }
//     const { product } = props;
//     const handleAddToCartButton = () => {
//         console.log(product);
//         addItemToCart( product);
//     };
//     return (
//         <Button onClick={handleAddToCartButton}>Add To Cart</Button>
//     );
// }
// export default AddToCartBtn;
import { Button } from "@mui/material";
import { useState, useEffect } from "react";


const AddToCartBtn = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addItemToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  const { product } = props;

  const handleAddToCartButton = () => {
    addItemToCart(product);

  };

  return <Button onClick={handleAddToCartButton}>Add To Cart</Button>;
};

export default AddToCartBtn;