
import PopularProducts from "../components/popularProducts";
import { useEffect, useState } from "react";
import axios from "axios";




const  Home=({cart,setCart}) => {
  const [products,setProducts] = useState([]);

  const fetchData = async() => {
    const resp = await axios.get("http://localhost:8000/products/all");
    setProducts(resp.data);
  }
  useEffect(()=>{
  fetchData()
  },[])

  
  return (
    <div className="App">
      
      <PopularProducts products={products} cart={cart} setCart={setCart}/>
      
      
    </div>
  );
}

export default Home;
