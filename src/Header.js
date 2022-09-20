import React from "react";
import data from "./data.json"

const Header = () => {
  return(
    <header>
    <center><h1>TO DO </h1>
    <form>
       <input
       placeholder="Enter task">
      </input>
      <button type="submit">add</button>
      </form>
    </center>
    
    </header>
  )
};

export default Header;