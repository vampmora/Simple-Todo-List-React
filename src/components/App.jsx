import React, { useState } from "react";
import List from "./List";
import Footer from "./Footer";

function App() {
  const [inputText, setInputText] = useState();
  const [add, setAdd] = useState([]);

  function changeInput(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function click() {
    setAdd((addTodo) => {
      return [...addTodo, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setAdd((delLine) => {
      return delLine.filter((add, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
      </div>

      <div className="todo">
        <input
          onChange={changeInput}
          type="text"
          value={inputText}
          placeholder="write your list"
        />
        <button onClick={click}>
          <span>Add</span>
        </button>
      </div>

      <div className="list">
        <ul>
          {add.map((newTodo, index) => {
            return (
              <List
                line={newTodo}
                onDelete={deleteItem}
                id={index}
                key={index}
              />
            );
          })}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default App;
