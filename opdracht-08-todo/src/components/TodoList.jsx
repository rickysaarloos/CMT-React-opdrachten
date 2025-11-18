const TodoList = ({ todos, setTodos }) => {

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-white flex items-center justify-between w-72 p-2 rounded shadow"
        >
          <p
            className={`text-sm text-black ${
              todo.completed ? "line-through opacity-50" : ""
            }`}
          >
            {todo.text}
          </p>

          <div className="flex gap-2">
           
            <button
              onClick={() => toggleComplete(index)}
              className="bg-green-500 text-white px-2 py-1 rounded text-xs"
            >
              ✓
            </button>

         
            <button
              onClick={() => deleteTodo(index)}
              className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
