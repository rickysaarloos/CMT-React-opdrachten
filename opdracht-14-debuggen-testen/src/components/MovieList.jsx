import MovieItem from './MovieItem';

const MovieList = ({ movies, onDelete }) => {
  if (movies.length === 0) {
    return <p>No favorite movies yet. Add some!</p>;
  }

  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default MovieList;


