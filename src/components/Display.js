import React from "react";
import Cart from './Cart';
import a from './Cart'
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Display =()=>{
    // const params = useParams();
    // console.log(a);
    const location = useLocation();
    const result = location.state?.data
    console.log(result);

    return(
        <div>
            <h1>heloo</h1>
            {/* {
                items?.map((items) => {
                    <div key={items.id}>
                      <div>{items}</div>
                    </div>
                })
            } */}
        </div>
    )
}
export default Display;