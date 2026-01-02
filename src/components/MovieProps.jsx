import { useGlobal } from "../MoviesData";
import MovieCard from "./MovieCards";
import { Link, useParams } from "react-router-dom";

export function MovieProps() {
    const GENRES = {
        action: 28,
        comedy: 35,
        drama: 18,
        horror: 27,
        romance: 10749,
        scifi: 878,
    };

    const { movie, page, setPage } = useGlobal();
    const { gtype } = useParams();

    const genreId = gtype ? GENRES[gtype] : null;

    const increasePage = () => setPage(page + 1);
    const decreasePage = () => setPage(page > 1 ? page - 1 : 1);

    return (
        <div className="content-wrapper">
            <h2 className="fw-800 mb-4">
                Explore <span style={{ color: "var(--neon-purple)" }}>Movies</span>
            </h2>

            <div className="filter-container mb-4">
                <Link to="/movies" className={`genre-chip ${!gtype ? "active" : ""}`}>
                    All Movies
                </Link>

                <Link to="/movies/action" className="genre-chip">Action</Link>
                <Link to="/movies/scifi" className="genre-chip">Sci-Fi</Link>
                <Link to="/movies/comedy" className="genre-chip">Comedy</Link>
                <Link to="/movies/horror" className="genre-chip">Horror</Link>
                <Link to="/movies/romance" className="genre-chip">Romance</Link>
                <Link to="/movies/drama" className="genre-chip">Drama</Link>
            </div>

            <div className="row">
                {movie
                    .filter(item =>
                        !genreId || item.genre_ids.includes(genreId)
                    )
                    .map(item => (
                        <MovieCard
                            key={item.id}
                            title={item.title}
                            poster={item.poster_path}
                            date={item.release_date}
                            popularity={item.vote_average}
                            id={item.id}
                        />
                    ))}
            </div>

            {/* PAGINATION */}
            <nav className="pagination-container d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item">
                        <button onClick={decreasePage} className="page-link">
                            Previous
                        </button>
                    </li>

                    <li className="page-item active">
                        <span className="page-link">{page}</span>
                    </li>

                    <li className="page-item">
                        <button onClick={increasePage} className="page-link">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
