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
// const [setNaam,upName ] = useState("")
// const [setName, setFull] = useState("")
// const [dusra,pehla] = useState("")
// const [nayaDusra,nayaPehla ] = useState("")
// const namch = (e) => {
// console.log(e.target.value)
// upName(e.target.value)
// }
// const stName = (e) => {
//   e.preventDefault(); 
//   setFull(setNaam)
//   nayaPehla(dusra)

// } 
// const chan = (e) => {
//   console.log(e.target.value)
//   pehla(e.target.value)
// }
const [item,naItem ] = useState("")
const [fnItem,edItem] = useState([])

const some = (e) => {
  // console.log(e.target.value)
  naItem(e.target.value)
}
const submit = () => {
  edItem((oldItem)=>{
    return[...oldItem, item]
  })
  naItem("")
  
}
const star = "*"



  return (
    <div className= "App"  >
      {/* <form onClick={stName} > */}
      {/* <h1 > {stime}</h1> */}
      {/* <button className = "kuch" onClick={timeup} >click me</button>  */}
      {/* <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{pnaam}</button> */}
      {/* <h1>Hello {setName}  {nayaDusra}  </h1>
      <input onChange={namch} type="text" placeholder="enter your first name" /><br />
      <input onChange={chan} type="text" placeholder="enter your last name" />
      <div><button type = "submit">click me</button></div> */}
      {/* </form> */}
      <h1>To Do List</h1>
      <input type="text" value={item} placeholder="enter your lsit" onChange={some} />
      <button onClick={submit} >click me</button>
      
    {fnItem.map((list) => {
        return  <li>{list}</li>
             
               
                  
    })}
     
    </div>
  );
}

export default App;
