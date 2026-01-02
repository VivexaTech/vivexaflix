import { useGlobal } from "../MoviesData";
import Trailer from "./Trailer";
import { useParams } from "react-router-dom";

export default function MovTrail() {
  const {id} = useParams()
  const { movie, page, setPage, videoKeys } = useGlobal();
  console.log(movie)

  return (
    <>
      {movie.map((item) => {
         if (item.id !== Number(id)) return null;
         return(
        <div key={item.id}>
          <Trailer
            title={item.title}
            poster={item.poster_path}
            date={item.release_date}
            id={videoKeys[item.id]}
            des = {item.overview}
            videoKey={videoKeys[item.id]}
            
          />
        </div>)
      })}
    </>
  );
}
