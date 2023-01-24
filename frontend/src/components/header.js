
import "../styles/header.css";
import { Input, Select } from 'antd';
import { BsSearch } from "react-icons/bs"

import { IoIosSync,IoLogoDribbble } from 'react-icons/io';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import {Link} from "react-router-dom";
const { Option } = Select;

const Header = () => {
    const selectBefore = (
        <Select defaultValue="All Categories">
            <Option>Women's</Option>
            <Option>Men's</Option>
            <Option>Cellphones</Option>
            <Option>Computers</Option>
            <Option>Electronics</Option>
        </Select>
    );
    return (
        <div>
            <div >
           
              <div style={{width:"100%",backgroundColor:"black",height:"60px",marginBottom:"1rem"}} >
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <img style={{width:"180px"}} src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"/>
                <p style={{width:"85px",height:"35px",backgroundColor:"green",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",marginRight:"1rem"}}>Buy now</p>
              </div>
              </div>
                <div className="flexBox headerTop">
                    <ul>
                        <li>About us</li>
                        <li className="borderL borderR">My Account</li>
                        <li className="borderR">Wishlist</li>
                        <li>Order Tracking</li>
                    </ul>
                    <p>Get great devices up to 50% off
                        <a href="#">View details</a>
                    </p>
                    <ul>
                        <li>Need help? Call Us:+ 1800 900</li>
                        <li className="borderL borderR"><IoLogoDribbble/>English</li>
                        <li>USD</li>
                    </ul>
                </div>
                <div className="flexBox headerMid">
                    <img src="https://nest-nextjs.vercel.app/assets/imgs/theme/logo.svg" alt="logo" />
                   <Input className="searchBar" addonBefore={selectBefore} placeholder="Search..." suffix={<BsSearch />}/>
                    <ul>
                        <li><IoIosSync style={{fontSize:'25px'}} /> Compare</li>
                        <li><AiOutlineHeart style={{fontSize:'25px'}}/> Wishlist</li>
                        <li><AiOutlineShoppingCart style={{fontSize:'25px'}}/> <Link to="/Cart" style={{textDecoration:"none"}}>Cart</Link></li>
                        <li><AiOutlineUser style={{fontSize:'25px'}}/> Account</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Header;
