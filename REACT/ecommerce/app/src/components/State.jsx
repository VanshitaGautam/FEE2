import React from 'react'
import{useState} from 'react';
const State = () => {
    let[count,addCount]=useState(0);
    let handleCount=()=>{
       addCount(count + 1);
        // console.log(count);
    }
  return (
    <div>
        <h1>count is: {count}</h1>
        
        <button onClick={handleCount}>increase count</button>
    </div>
  )
}

export default state