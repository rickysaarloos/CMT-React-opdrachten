import { useState } from "react";

const CreateTodo = ({ todos, setTodos }) => {
  const [textInput, setTextInput] = useState("");

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() === "") return;

   
    const newTodo = {
      text: textInput,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTextInput("");
  };

  return (
    <form className="flex justify-center mt-6 gap-2">
      <input
        type="text"
        className="w-72 p-2 rounded shadow text-sm outline-none"
        placeholder="What to do?"
        value={textInput}
        onChange={handleInputChange}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
};

export default CreateTodo;
