
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
 
 
 return (
   <div className="App">
     <Header />
   </div>
 );
}
 
export default App;








 