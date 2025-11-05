import { useState } from "react";

const CreateTodo = ({ todos, setTodos }) => {

  const [textInput, setTextInput] = useState("");

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, textInput]); 
    setTextInput(""); 
  };

  return (
    <form>
      <input 
        type="text"
        value={textInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Toevoegen</button>
    </form>
  );
};

export default CreateTodo;