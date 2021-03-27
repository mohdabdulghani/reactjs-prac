import React, { useState } from "react";
import logo from './logo.svg';

import './App.css';

function App() {
  
  // const  [count, upcount] = useState(0)
    
  // const incrmt = () => {
  //   upcount(count+1);
  // }
  
//   const time = new Date().toLocaleTimeString(); 
  
//  const [stime,settime ] = useState(time)
//  const timeup = () => {
//    let newtime = new Date().toLocaleTimeString(); 
//    settime(newtime)
   
//  }
//  setInterval(timeup,1000)

let naam = "click"
let dsnaam = "nakko karo"
let purple = "#8e44ad";
let green = "#34495e"
const [bg, chbg] = useState(purple)
const [pnaam,dnaam ] = useState(naam)
const bgChange = () => {
  chbg(green)
  dnaam(dsnaam)

  
}


const bgBack = () => {
  chbg(purple)
  dnaam(naam)
}


  return (
    <div className= "App" style={{ backgroundColor:bg}} >
      {/* <h1 > {stime}</h1> */}
      {/* <button className = "kuch" onClick={timeup} >click me</button>  */}
      <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{pnaam}</button>
      
    </div>
  );
}

export default App;
