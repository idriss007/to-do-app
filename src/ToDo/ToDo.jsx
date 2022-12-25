import React from "react";
import "./todo.css"

function ToDo(props) {

    function handleClick(event) {
        event.target.classList.toggle("pressed");
        if(event.target.className === "todo pressed") {
            props.setCountTodo(props.countTodo - 1);
        } else {
            props.setCountTodo(props.countTodo + 1);
        }
    }

    return (
        <div className="todo" onClick={handleClick}>
            {props.note}
        </div>
    );
}

export default ToDo;