import React, { useState, useEffect } from "react";
import ListItem from "./components/listItem";
import { Modal } from "@mantine/core";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editedvalue, setEditedValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      window.alert("Write something to add !...");
      return;
    } else {
      let arr = [...toDoList];
      arr.push(value);
      setToDoList(arr);
      setValue("");
    }
  };

  const removeItem = (value) => {
    var arr = [...toDoList];
    let index = arr.indexOf(value);
    arr.splice(index, 1);
    setToDoList(arr);
  };

  const editItem = (index) => {
    var arr = [...toDoList];
    setIsOpen(true);
    setEditedValue(arr[index]);
    setSelectedIndex(index);
    console.log("array of index", arr[index]);
  };
  const onClikEdit = (index) => {
    var arr = [...toDoList];
    arr[index] = editedvalue;
    setToDoList(arr);
  };
  useEffect(() => {
    console.log("the value is changed", { toDoList });
    setIsOpen(false);
  }, [toDoList]);

  return (
    <div className="App">
      <h1 className="center">TO DO </h1>
      <form className="center">
        <input
          className="input"
          placeholder="Enter task"
          type="text"
          id="toDoMessage"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        ></input>
        <button id="addButton" className="btn" onClick={onSubmit}>
          ADD
        </button>
      </form>
      {toDoList.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          index={index}
          onItemClick={removeItem}
          onClickEdit={editItem}
        ></ListItem>
      ))}
      <Modal
        className="center"
        opened={modalIsOpen}
        title="Edit your ToDo"
        onClose={() => setIsOpen(false)}
        size="75%"
      >
        <input
          data-autofocus
          className="input"
          size="auto"
          type="text"
          id="editedToDo"
          value={editedvalue}
          onChange={(event) => {
            setEditedValue(event.target.value);
          }}
        ></input>
        <button
          id="editButton"
          className="btn"
          onClick={() => {
            onClikEdit(selectedIndex);
          }}
        >
          EDIT
        </button>
      </Modal>
    </div>
  );
}

export default App;
