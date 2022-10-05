import React from "react"
import '../App.css';


function ListItem (props) {
 
return(
  <div>
    <ul>
              <li className="card-divider ">
                {props.item}  
                <span className="close"   onClick={() => {
          props.onItemClick(props.index)
        }}>
                 X
                </span>
                </li>
            </ul>
  </div>
    
)
}

export default ListItem;