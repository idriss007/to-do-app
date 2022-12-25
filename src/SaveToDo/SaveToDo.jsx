import React from "react";
import "./savetodo.css";

function SaveToDo(props) {

    return (
        <div className="save-to-do">
            <form onSubmit={props.onClick}>
                <input value={props.todo} type="text" onChange={props.onChange} placeholder="Yapılacak..." id="task-input"></input>
                <button type="submit" class={props.todo ? "add-task-button active-button" : "add-task-button"}>Kaydet</button>
            </form>
        </div>
    );
}

export default SaveToDo;