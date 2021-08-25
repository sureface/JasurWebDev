import React, {useState, useEffect} from 'react';
import Nav from '../conponents/nav';
import From from "../conponents/from";
import Todolist from "../conponents/todolist";

const Team = () => {

    // state's stuff
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filtredTodos, setFiltredTodos] = useState([]);

    //UseEffect
    useEffect(() => {
        filterHandler()
    }, []);

    // functions and events
    const filterHandler = () => {
        switch(status){
            case "completed":
                setFiltredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFiltredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFiltredTodos(todos);
                break;
        }
    }
    return (
        <div className="toDoList">
            <Nav />
            <header>
                <h1>Hey i am   </h1>
                <h1>Jasur's todoList writeing here: {inputText}</h1>
            </header>

            <From
                inputText={inputText}
                todos={todos}
                SetTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                status={status}
                filtedTodos={filtredTodos}
            />

            <Todolist todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Team;