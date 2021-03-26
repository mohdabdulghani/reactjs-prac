import React, { useState } from "react";
import logo from './logo.svg';

import './App.css';

function App() {
  
  const  [count, upcount] = useState(0)
    
  const incrmt = () => {
    upcount(count+1);
  }



  return (
    <div className= "App" >
      <h1 >{count}</h1>
      <button className = "kuch" onClick={incrmt}>click me</button>
      
    </div>
  );
}

export default App;
