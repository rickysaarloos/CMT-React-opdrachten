import { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;