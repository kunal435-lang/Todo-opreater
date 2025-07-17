import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navbar = ({ onNewItem }) => {
  function handleClick() {
    alert("hwyy");
  }
  const [todoName, setTodoName] = useState();
  const [tododueDate, setDueDate] = useState();
  const handleNameChage = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const handelAddButtonClicked = () => {
    onNewItem(todoName, tododueDate);
    setDueDate("");
    setTodoName("");
  };
 
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter"
            value={todoName}
            onChange={handleNameChage}
          />
        </div>
        <div className="col-4">
          <input type="date" value={tododueDate} onChange={handleDueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary" onClick={handelAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
