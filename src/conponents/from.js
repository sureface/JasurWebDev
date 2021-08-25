import React from 'react';

const From = ({setInputText, setStatus, todos, SetTodos, inputText}) => {

    const imPlaceHolderOfInput = 'Add Task...';

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler =(e) => {
        e.preventDefault();
        SetTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.floor(Math.random() * 1000)
            }
        ]);
        setInputText('');
    }
    const statesHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" placeholder={imPlaceHolderOfInput} className="todo-input"/>

            <button className="todo-button" onClick={submitTodoHandler} type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statesHandler} name="todos"  className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default From;