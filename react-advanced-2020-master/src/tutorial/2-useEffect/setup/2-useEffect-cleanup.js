import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
const [size,setSize]= useState(window.innerWidth)

const [height,setHeight]= useState(window.innerHeight)

const checkSize = () =>{
  setSize(window.innerWidth)
}
const checkHeight=()=>{
  setHeight(window.innerHeight)
}

useEffect(()=>{
  window.addEventListener('resize',checkHeight)
  return ()=>{
    window.removeEventListener('resize',checkHeight)
  }
})

useEffect(()=>{
  window.addEventListener('resize',checkSize)
  return ()=>{
    window.removeEventListener('resize',checkSize)
  }
})
  return <>
  <h1>window Width</h1>
  <h2>{size} px</h2>
  <h1>window Height</h1>
  <h2>{height} px</h2>
  </>;
};

export default UseEffectCleanup;
