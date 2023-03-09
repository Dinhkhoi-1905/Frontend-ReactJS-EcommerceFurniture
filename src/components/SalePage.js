import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
import CardP from "./CardP";
import CartDetail from "./CartDetail";
const SalePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts();
    }, []);

    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div >
            <h1>This is Sale Page</h1>
            <CartDetail>
            </CartDetail>
            <br />
            <Container maxWidth="inherit" sx={{ display: "flex", flexWrap: 'wrap',justifyContent:' space-evenly', alignItems:'left' }}>

                {products.map((product, index) => (
                    // <li key={product._id}>{product.name}</li>
                    <CardP  key={index} product={product} />
                ))}
            </Container>
        </div>
    );
};

export default SalePage;
