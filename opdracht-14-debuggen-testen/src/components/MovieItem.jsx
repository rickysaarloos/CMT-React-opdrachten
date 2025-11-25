
  const MovieItem = ({ movie, onDelete }) => {
  return (
    <li className="movie-item">
      {movie}
      <button onClick={() => onDelete(movie)}>
        Remove
      </button>
    </li>
  );
};


export default MovieItem;
