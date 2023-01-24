import React from 'react';
import "../styles/popularProducts.css";
import { StarFilled,ShoppingCartOutlined } from '@ant-design/icons';

import { addTocart  } from '../utils/cartManagement';


export default function PopularProducts(x) {
  return (
    <div id='productArr'>

        {x.products.map(e =>{
    
      return <div className='productCard' >
       <img className='productThumb' src={e.thumbnail.main} />
       <p className='brand'>{e.brand}</p>
       <p className='name'>{e.name}</p>
       <p className='icon'><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></p>
       
       <div className='priceContainer'>
          
            <p className='price'>${e.price}</p>
          <button className='cartButton' onClick={() => x.setCart(addTocart(e,x.cart))}><ShoppingCartOutlined/>ADD</button>
            </div>
        </div>
    })}
    </div>
  )
}
