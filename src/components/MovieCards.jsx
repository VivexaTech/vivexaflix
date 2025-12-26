import { useEffect, useState } from "react";
import { MovieTrailer } from "../MoviesData";

export default function MovieCard({ title, poster, date, popularity, id }) {
    const popul = Math.round(popularity);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        async function fetchTrailer() {
            const vdata = await MovieTrailer(id);
            setTrailer(vdata.results[0]);
        }

        fetchTrailer();
    }, []);

    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} className="movie-img" />
                <div className="movie-overlay">
                    <div className="movie-info">
                        <h5 className="movie-title">{title}</h5>
                        <p className="movie-meta">{date} • Popularity • {popul}%</p>
                        <div className="movie-actions">
                            <a href={`https://www.youtube.com/watch?v=${trailer?.key}`}><button className="btn btn-play"><i className="fas fa-play"></i> Watch Now</button></a>
                            <button className="btn btn-icon"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}