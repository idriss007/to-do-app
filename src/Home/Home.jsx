import React, { useState } from "react";
import SaveToDo from "../SaveToDo/SaveToDo";
import ToDo from "../ToDo/ToDo";
import "./home.css";

function Home() {

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [countTodo, setCountTodo] = useState(0);

    function handleChange(event) {
        setTodo(event.target.value);
    }

    function handleClick(event) {
        if(todo) {
            setTodos(prevValue => {
                return [
                    ...prevValue,
                    todo
                ]
            });
            setCountTodo(countTodo + 1);
            setTodo("");
            event.preventDefault();

        }
        event.preventDefault();
        
    }

    return (
        <div className="container">
            <div className="top-container">
                <div className="inner-top-container">
                    <p id="top-heading">Yapılacaklar</p>
                    <p id="task-to-do">{countTodo}</p>
                </div>

                {todos.map(x => {
                    return <ToDo note={x} todos={todos} countTodo={countTodo} setCountTodo={setCountTodo}/>
                })}
                

            </div>

            <SaveToDo todo={todo} todos onChange={handleChange} onClick={handleClick}/>

        </div>
    );
}

export default Home;