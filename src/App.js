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

// let naam = "click"
// let dsnaam = "nakko karo"
// let purple = "#8e44ad";
// let green = "#34495e"
// const [bg, chbg] = useState(purple)
// const [pnaam,dnaam ] = useState(naam)
// const bgChange = () => {
//   chbg(green)
//   dnaam(dsnaam)

  
// }


// const bgBack = () => {
//   chbg(purple)
//   dnaam(naam)
// }
const [setNaam,upName ] = useState("")
const [setName, setFull] = useState()
const namch = (e) => {
// console.log(e.target.value)
upName(e.target.value)
}
const stName = () => {
  setFull(setNaam)
}


  return (
    <div className= "App"  >
      {/* <h1 > {stime}</h1> */}
      {/* <button className = "kuch" onClick={timeup} >click me</button>  */}
      {/* <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{pnaam}</button> */}
      <h1>Hello {setName}</h1>
      <input onChange={namch} type="text" placeholder="enter your name" />
      <div><button onClick={stName}>click me</button></div>
      
    </div>
  );
}

export default App;
