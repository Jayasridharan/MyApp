import React, { useState, useEffect } from "react";
import ListItem from "./components/listItem";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    
   if(value === ''){
    window.alert("Write something to add !...")
   }
   else{
    event.preventDefault();
    let arr = [...toDoList];
    arr.push(value);
    setToDoList(arr);
   }
  };

  const removeItem = (value) => {
    var arr =[...toDoList]
let index =arr.indexOf(value);
arr.splice(index,1);
setToDoList(arr)
  }

  useEffect(() => {
    console.log("the value is changed", {toDoList})
  }, [toDoList])

  return (
    <div className="App">
        <h1 className="center">TO DO </h1>
        <form className="center">
          <input className= "input"
            placeholder="Enter task"
            type="text"
            id="toDoMessage"
            onChange={(event) => {
              setValue(event.target.value);
            }}
          ></input>
          <button className = "btn" onClick={onSubmit}>
            add
          </button>
        </form>
        {
          toDoList.map((item,index) => (
            
            <ListItem key= {index} item = {item} index ={index} onItemClick= {removeItem} >
            </ListItem>
          ))}
    </div>
  );
}

export default App;

