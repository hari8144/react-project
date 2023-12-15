// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM  from "react-dom/client";
import Layout from "./Project/Layout";
import Home from "./Project/Home";
import Product from "./Project/product"
import AddProduct from "./Project/AddProduct";
import Login from "./Project/Login";
import Register from "./Project/Register";
import "./index.css";

import {BrowserRouter,Routes,Route}from "react-router-dom"
export default function App()
{
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="product"element={<Product/>}/>
            <Route path="addproduct"element={<AddProduct/>}/>
            <Route path="login"element={<Login/>}/>
            <Route path="register"element={<Register/>}/>
            
        </Route>
       </Routes>
       
       </BrowserRouter>
    )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
 r1.render(<App/>);
