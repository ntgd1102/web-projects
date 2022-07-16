import React, {useState} from 'react';

import './TodoList.css';

interface Todo {
  title: string;
  isHighPriority: boolean;
  isCompleted: boolean;
}

export default function TodoApp() {
  // keep track of todos in state
  const [todos, setTodos] = useState<Todo[]>([]);

  // keep track of input in form
  const [inputText, setInputText] = useState('');

  // when clicking 'Add Todo', add the current inputText to the todos
  function handleSubmit(e: React.SyntheticEvent, isHighPriority: boolean) {
    e.preventDefault();

    const trimmedInputText = inputText.trim();
    if (trimmedInputText) {
      const newTodo = {
        title: trimmedInputText,
        isHighPriority,
        isCompleted: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // reset inputs after a successful addition to the todos
      setInputText('');
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
                className = className + ' red_background';
              }
              return (
                <li className={className} key={index}>
                  <input
                    type="checkbox"
                    value={title}
                    onChange={(e) => {
                      setTodos((todos) => {
                        const todo = todos.find((todo) => todo.title === title);
                        if (!todo) {
                          return todos;
                        }
                        todo.isCompleted = e.target.checked;
                        return [...todos];
                      });
                    }}
                  />
                  <label className={isCompleted ? 'completed' : 'unCompleted'}>
                    {' '}
                    {title}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// import "./styles.css";
// import React, { useState } from "react";

// import { DropdownButton, Dropdown } from "react-bootstrap";

// const countryCodeMap = {
//   china: "+86",
//   usa: "+1",
//   france: "+33",
// };

// export default function App() {
//   const [countryCode, setCountryCode] = useState(undefined);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const onSelect = (e) => {
//     if (!countryCodeMap[e.target.value]) {
//       return;
//     }
//     setCountryCode(countryCodeMap[e.target.value]);

//     // process Number
//     // 1. if there is already a country code here

//     if (countryCode) {
//       const numberWithoutCountryCode = phoneNumber.slice(
//         countryCode.length,
//         phoneNumber.length
//       );
//       let newPhoneNumber = `${
//         countryCodeMap[e.target.value]
//       }${numberWithoutCountryCode}`;
//       setPhoneNumber(newPhoneNumber);
//     } else {
//       // 2. if there is no country code yet
//       setPhoneNumber(`${countryCodeMap[e.target.value]}${phoneNumber}`);
//     }
//   };

//   const onNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   return (
//     <div className="App">
//       <div className="phone-number-container">
//         <select name="country" id="cars" onChange={onSelect}>
//           <option value="china">China</option>
//           <option value="usa">USA</option>
//           <option value="france">France</option>
//         </select>
//         <input
//           className="phone-number"
//           value={phoneNumber}
//           onChange={onNumberChange}
//         />
//       </div>
//     </div>
//   );
// }
