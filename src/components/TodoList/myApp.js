import React from "react";
import styles from "./myApp.module.css";

function MyApp() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );
  const todoInputRef = React.useRef(null);

  React.useEffect(() => todoInputRef.current.focus(), []);

  function getTodoItem() {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.text}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={toggleTodoComplete}
            />
            <span className={todo.isCompleted && styles.strikethrough}>
              {todo.text}
            </span>
            <button onClick={onDelete}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

  function onAdd() {
    const newTodos = [
      ...todos,
      { text: todoInputRef.current.value, isCompleted: false },
    ];
    setTodos(newTodos);
    todoInputRef.current.value = "";
    todoInputRef.current.focus();
    // ToDo: the below statement can be moved to componentWillUnmount
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function onDelete(e) {
    const todoText = e.target.previousSibling.innerText;
    const newTodos = todos.filter((todo) => todo.text !== todoText);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function toggleTodoComplete(e) {
    const todoText = e.target.nextSibling.innerText;
    const newTodos = todos.map((todo) => {
      if (todo.text === todoText) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function getAddTodo() {
    return (
      <div>
        <input type="text" placeholder="add todo text.." ref={todoInputRef} />
        <button onClick={onAdd}>Add</button>
      </div>
    );
  }

  return (
    <div>
      {getAddTodo()}
      {getTodoItem()}
    </div>
  );
}

export default MyApp;
