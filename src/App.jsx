import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Currenttime from "./Currenttime";
import Navbar from "./Navbar";
import Todoitems from "./Todoitems";
import { useState } from "react";
import Welcome from "./welcome";

function App() {
 
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
   
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };
    const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>

      <div className="todo container text-center">
        <h1>TODO App</h1>

        <Currenttime />
        <Navbar onNewItem={handleNewItem}></Navbar>
   {todoItems.length === 0 && <Welcome />}

        <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></Todoitems>
      </div>
    </>
  );
}

export default App;
