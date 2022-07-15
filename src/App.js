import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import Form from "./components/Form";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todo")) || [];
  });
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  });
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1 className="font-mono font-extrabold text-indigo-500 text-5xl text-center my-8">
          ToDo L1st
        </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodo={setTodo}
        todo={todo}
      />
      <ul className="flex flex-col justify-center items-center mt-6">
        {todo.map((elem) => (
          <Todo
            todoArray={todo}
            todo={elem}
            setTodo={setTodo}
            text={elem.text}
            key={elem.id}
            date={elem.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
