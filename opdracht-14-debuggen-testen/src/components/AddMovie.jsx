import { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedMovie = movie.trim();

    if (trimmedMovie === "") {
      alert("Movie name cannot be empty");
      return;
    }

    onAdd(movie); 
 setMovie(''); 
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Add a new movie"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
