import React, { useState } from "react";
import logo from './logo.svg';

import './App.css';

function App() {
  
  // const  [count, upcount] = useState(0)
    
  // const incrmt = () => {
  //   upcount(count+1);
  // }
  
  const time = new Date().toLocaleTimeString(); 
  
 const [stime,settime ] = useState(time)
 const timeup = () => {
   let newtime = new Date().toLocaleTimeString(); 
   settime(newtime)
   
 }


  return (
    <div className= "App" >
      <h1 > {stime}</h1>
      <button className = "kuch" onClick={timeup} >click me</button>
      
    </div>
  );
}

export default App;
