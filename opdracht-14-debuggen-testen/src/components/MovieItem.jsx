const MovieItem = ({ movie, onDelete }) => {
  return (
    <li>
      {movie}
      <button onClick={() => onDelete(movie)}>Remove</button>
    </li>
  );
};

export default MovieItem;
