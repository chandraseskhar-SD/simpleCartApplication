import React, { useEffect, useState } from "react";
import data from './data';
import './Cart.css';
import Display from "./Display";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{
    const navigate =useNavigate();
    const [count, setCount]=useState(0);
    const [items, setItems]=useState([])
    console.log(items)
    const handleAdd = (product)=>{
        setCount(count+1);
        setItems((prevItems)=> [...prevItems, product]);
        // localStorage.setItem('item', JSON.stringify(...items))
    }
    useEffect(()=>{
         setItems(items)

    },[items])
    return(
        <div className="container">
            <div className="icon"><span><i className="fa-solid fa-cart-plus" onClick={()=>navigate('./Display', {state:{data:items}})}><p>{count}</p></i></span></div>
            <h1>welcome to shopping</h1>
            {
                data.map((item)=>(
                    <div className="card"  key ={item.id}>
                            <img src={item.image}  alt="..."/>
                            <div className="card-body">
                                <h6 className="card-text">{item.tittle}</h6>
                                <p className="card-text">{item.price}</p>
                                <button type="button" onClick={() => handleAdd(item)}>Addcart</button>
                            </div>
                            </div>
                ))
            }
        </div>
    )
}
export default Cart;