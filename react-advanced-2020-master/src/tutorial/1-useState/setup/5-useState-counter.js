import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value,setValue]=useState(0)
  
  const[ovalue,setOvalue]=useState(0)

  const reset=() => {
    setValue(0);
  }

  const complexIncrease = ()=>{
    setTimeout(() => {
      //setValue(value + 1)
      setOvalue((prevState)=>{
        return prevState + 1;
      })   
    }, 2000);
  }
  const complexdecrease=()=>{
    setTimeout(()=>{
      setOvalue((prevState)=>{
        return prevState -1
      })
    },2000)
  }
  return <>
  <section style={{margin: '4rem 0'}}>
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className="btn" onClick={()=> setValue(value - 1)}>decrease</button>
    <button className="btn" onClick={reset}>reset</button>
    <button className="btn" onClick={()=> setValue(value + 1)}>increase</button>
    <h2>complex counter</h2>
    <h1>{ovalue}</h1>
    <button className="btn" onClick={complexdecrease}>decrease</button>
    <button className="btn" onClick={()=> setOvalue(0)}>reset</button>
    <button className="btn" onClick={complexIncrease}>
      increase later
      </button>
  </section>
  </>;
};

export default UseStateCounter;
