import { useEffect, useState } from "react";
import css from "./App.css"
import MoviesData from "./MoviesData";
import MovieCard from "./components/MovieCards";
import Trailer from "./components/Trailer";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await MoviesData();
      setMovies(data.results);
    }

    fetchMovies();
  }, []);



  return (
    <>
    <Trailer/>
      <div className="container">
        <div className="row">
          {movies.map((item) => (
            <MovieCard key={item.id} title={item.title} poster={item.poster_path} date={item.release_date} popularity={item.popularity} id={item.id} />
          ))}
        </div>
      </div>

    </>
  );
}

export default App;
