import React from "react";
 
const Todolist = (props) => {
    return  (
    <>
    
    <li> {props.text} </li>
    <button onClick={()=>{
        props.onSelect(props.id);
    }}>del</button>
    
    </>
    );   
    
}; 
export default Todolist;