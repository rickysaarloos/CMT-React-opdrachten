import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 
                    bg-gradient-to-r from-blue-600 to-blue-900 text-white">

      <h1 className="text-4xl font-bold mb-8">
        &lt;Ricky&gt;<span className="text-white">To Do List</span>
      </h1>

      <CreateTodo todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
