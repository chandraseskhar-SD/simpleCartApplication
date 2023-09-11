import React, { useState } from "react"

const Memorise = ()=>{
    const [count, setCount]=useState(0)
    const [number,setNumber]= useState(5);
    const factorial = React.useMemo(()=>fact(number),[number]);
    return(
        <div>
            <h1>heloo</h1>
            factorial:{factorial}<br/>
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button><br></br>
            <button type="button" onClick={()=>setNumber(number+1)}>Number Increment</button><br/>
            count:{count}
        </div>
    )
}
export default Memorise;

const fact = (num)=>{
    let answer=1;
    for(let i=num; num>=i; i--){
         answer=answer*i;
        
    }
    console.log('factorial function excuted');
    return answer;
}
