import { useGlobal } from "../MoviesData";
import MovieCard from "./MovieCards";
import { useParams } from "react-router-dom";

export function MovieProps() {

    const { movie, page, setPage, videoKeys } = useGlobal();
    const increasePage = () => {
    setPage(page + 1);
  };
  const decreasePage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

    return (
        <div className="container">
            <div>
                    <button onClick={decreasePage}>-</button>
                    <button onClick={increasePage}>+</button>
                    <h2>Page No: {page}</h2>
                </div>
            <div className="row">
                {movie.map((item) => (
                    <MovieCard 
                        key={item.id} 
                        title={item.title} 
                        poster={item.poster_path} 
                        date={item.release_date} 
                        popularity={item.vote_average}
                        id={videoKeys[item.id]} 
                    />
                ))}
            </div>
        </div>
    );
}