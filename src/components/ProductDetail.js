import { Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ProductDataService from "../services/ProductService";
import AddToCartBtn from "./AddToCartBtn";
const ProductDetail = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const [stateButton, setStateButton] = useState(true);
  // console.log(stateButton);
  const handleAddToCart = () => {
    // setStateButton(false);
    localStorage.setItem('cart', JSON.stringify({product}));
    
    // console.log("Add to cart with state button: " + stateButton);
  };
  const initialProductState = {
    id: null,
    name: "",
    description: "",
  };
  const [product, setProduct] = useState(initialProductState);
  // const [message, setMessage] = useState("");

  const getProduct = id => {
    ProductDataService.get(id)
      .then(response => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getProduct(id);
  }, [id]);

  return (
    <Container>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <p>
        {product.description}
      </p>
      <Button onClick={handleAddToCart}>Add to cart state </Button>
      <AddToCartBtn product={product}></AddToCartBtn>
    </Container>
  );
};

export default ProductDetail;
