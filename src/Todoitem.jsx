import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Todoitem = ({ todoDate, todoName,onDeleteClick }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2"> <button className="btn btn-danger" onClick={()=>onDeleteClick(todoName)}>
          end
        </button></div>
       
      </div>
    </div>
  );
};

export default Todoitem;
