import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import ProductsList from "./components/ProductsList";
// import imgProduct from .
import GianHang from "./components/GianHang";
import ProductDetail from "./components/ProductDetail";
import { GlobalStyles } from "@mui/material";
import TestMUI from "./components/TestMUI";
function App() {
  return (
  //   <div>
  //     {/* <GlobalStyles styles={{ h1: { color: 'blue' }, }} /> */}

  //     <nav className="navbar navbar-expand navbar-dark bg-dark">
  //       <a href="/products" className="navbar-brand">
  //         bezKoder
  //       </a>
  //       <div className="navbar-nav mr-auto">
  //         <li className="nav-item">
  //           <Link to={"/products"} className="nav-link">
  //             products
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to={"/add"} className="nav-link">
  //             Add
  //           </Link>
  //         </li>
  //         <li className="nav-item">
  //           <Link to={"/gianhang"} className="nav-link">
  //             Test gian hang
  //           </Link>
  //         </li>
  //       </div>
  //     </nav>
  //     <h1>Hello</h1>
  //     {/* <img src="/images/products/ban_an_go_pio_mat_melamite_van_marble_98093_1-768x511.jpg" alt="ban_an_go"></img> */}
  //     <div className="container mt-3">
  //       <Routes>
  //         <Route path="/" element={<ProductsList />} />
  //         <Route path="/products" element={<ProductsList />} />

  //         <Route path="/gianhang" element={<GianHang />} />

  //         <Route path="/add" element={<AddProduct />} />
  //         {/* <Route path="/products/:id" element={<Product />} /> */}
  //         <Route path="/products/:id" element={<ProductDetail />} />

  //       </Routes>
  //     </div>


  //   </div>
  <TestMUI/>
  );
}

export default App;
