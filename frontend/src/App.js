import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header";
import PopularProducts from "./components/popularProducts";
import Cart from "./pages/cart";
import Home from "./pages/home";
import {Routes,Route} from "react-router-dom";

function App() {

  const [cart,setCart]= useState({
    items: [],
    totalQuantity:0,
    totalPrice:0
  })

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path='/Cart' element={<Cart cart ={cart} setCart={setCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
