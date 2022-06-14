import React, { useState } from "react";

import "./TodoList.css";


interface Todo {
    title: string;
    isHighPriority: boolean;
    isCompleted: boolean;
}

export default function TodoApp() {
    // keep track of todos in state
    const [todos, setTodos] = useState<Todo[]>([]);

    // keep track of input in form
    const [inputText, setInputText] = useState("");

    // when clicking 'Add Todo', add the current inputText to the todos
    function handleSubmit(e: React.SyntheticEvent, isHighPriority: boolean) {
        e?.preventDefault();

        const trimmedInputText = inputText.trim();
        if (trimmedInputText) {
            const newTodo = { title: trimmedInputText, isHighPriority, isCompleted: false };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            // reset inputs after a successful addition to the todos
            setInputText("");
        }
    }

    return (
        <div className="TodoApp">
            <h1 className="spaced">Today's Todos</h1>
            <div className="row">
                <div className="column">
                <input
                            className="spaced"
                            onChange={(e) => {
                                setInputText(e.target.value);
                            }}
                            placeholder="Type todo text..."
                            type="text"
                            value={inputText}
                        />
                        <div>
                            <button
                                onClick={(e) => {
                                    handleSubmit(e, false);
                                }}
                            >
                                Add todo
                            </button>
                            <button
                                onClick={(e) => {
                                    handleSubmit(e, true);
                                }}
                            >
                                Add high priority todo
                            </button>
                        </div>
            
                </div>
                <div className="column">
                    <ul>
                        {todos.map((todo, index) => {
                            const {title, isHighPriority, isCompleted} = todo;
                            let className = 'TodoApp__todo spaced';
                            if (isHighPriority) {
                                className = className + ' red_background'
                            }
                            return (
                                <li className={className} key={index}>
                                    <input type='checkbox' value={title} onChange={(e) => {
                                        setTodos((todos) => {
                                            const todo = todos.find(todo => todo.title === title);
                                            if (!todo) {
                                                return todos;
                                            }
                                            todo.isCompleted = e.target.checked;
                                            return [...todos];
                                        })
                                    }}/>
                                    <label className={isCompleted? 'completed': 'unCompleted'}> {title}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
