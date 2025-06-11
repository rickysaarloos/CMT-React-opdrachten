import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    if (!movies.includes(newMovie)) {
      alert('This movie is already in your favorites!');
      return;
    }
    setMovie([...movies, newMovie]);
  };

  const deleteMovie = (movieToDelete) => {
    setMovies(movies.filter((movie) => movie !== movieToDelete));
  };

  return (
    <section className='container'>
      <Header />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </section>
  );
}

export default App;
