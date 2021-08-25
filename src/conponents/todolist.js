import React from 'react';
import Todo from "./todo";

const Todolist = ({ todos, setTodos,filtedTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtedTodos.map(todo => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Todolist;