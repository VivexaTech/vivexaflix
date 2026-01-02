import { useGlobal } from "../MoviesData";
import Slider from "./Slider";


export default function SliderProps() {
    const { movie, page, setPage } = useGlobal();

    console.log(movie)

    return (
        <>
            <h2 className="category-title mb-4"><span className="brand-text">Latest Releases</span></h2>
            <div className="trending-con">
                {movie.map((item) => (
                    <Slider
                        key={item.id}
                        title={item.title}
                        poster={item.poster_path}
                        date={item.release_date}
                        popularity={item.vote_average}
                        id={item.id}
                    />
                ))}
            </div>

            <h2 className="category-title mb-4">Trending on <span className="brand-text">Vivexa Flix</span></h2>
            <div className="trending-con">
                {movie.map((item) => (
                    <Slider
                        key={item.id}
                        title={item.title}
                        poster={item.poster_path}
                        date={item.release_date}
                        popularity={item.vote_average}
                        id={item.id}
                    />
                ))}
            </div>

            <h2 className="category-title mb-4">Popular on <span className="brand-text">Vivexa Flix</span></h2>
            <div className="trending-con">
                {movie.map((item) => (
                    <Slider
                        key={item.id}
                        title={item.title}
                        poster={item.poster_path}
                        date={item.release_date}
                        popularity={item.vote_average}
                        id={item.id}
                    />
                ))}
            </div>
        </>
    );
}
