
import React, {useState} from 'react';
import Header from './Header';
import data from './data.json';


// function AddItem(e){
//   const [arr,setArr] = useState([]);
// if (this.inputElement.value !== ""){
//   var newItem ={
//     text:this._inputElement.value,
//   }
// }
// else {

// }
// }


function App() {
  const [ toDoList, setToDoList ] = useState(data);
 
 console.log('toDoList',toDoList.task)
 const newList = data.map(object => {
let copyData = {...object};
return (
  <div><ul>
    {copyData.task}
    </ul></div>
  )
 });
 return (
   <div className="App">
     <Header />
     <div>{newList}</div>
   </div>
 );
}
 
export default App;








 