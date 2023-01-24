
import React from 'react';
// import "../styles/cart.css";
export default function Cart({cart}) {
  return (
    <>
    <h3> Your Cart</h3>
    <div id='cartContainer' style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto",gap:"1.5rem"}}>
       
    {cart.items.length && cart.items.map(e => {
        return (
            <div className='cart' style={{border:"1px solid gray",gap:"2rem",borderRadius:"4px",width:"280px"}} >

                <img style={{width:"250px",display:"flex",justifyContent:"center"}} src={e.product.thumbnail.main}/>
                <p style={{display:"flex",justifyContent:"center"}}>{e.product.name}</p>
                <p style={{display:"flex",justifyContent:"center"}}>${e.product.price}</p>
            </div>
        )
    })}
    </div>
    </>
  )
}






