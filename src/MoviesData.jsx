import { createContext,useContext,useEffect, useReducer, useState } from "react";
import { reducerMovie} from "./Reducer";

const Context = createContext();

export default function MoviesData({children}){
  
  const [page, setPage] = useState(1);
  const api_key = "af5bbda93fd08d621f0a5f3e33cf0c0b"
    const initialMovie = {
        movieLoading: false,
        movie: [],
    };
    

    const [movie, dispatch] = useReducer(reducerMovie, initialMovie);
    const [videoKeys, setVideoKeys] = useState({});

    useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    async function movData() {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page}`);
            const data = await res.json();
            const movies = data.results;

            const trailer = movies.map(async (item) => {
                const vRes = await fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${api_key}`);
                const vData = await vRes.json();
                const trailerKey = vData.results && vData.results.length > 0 
                       ? vData.results[0].key 
                       : null;
                return {
                    id: item.id,
                    key: trailerKey
                };
            });

            const allKeys = await Promise.all(trailer);
            const keysObj = {};
            allKeys.map(v => keysObj[v.id] = v.key);

            setVideoKeys(keysObj);
            dispatch({ 
              type: "SET_MOVIES", 
              payload: movies 
            });

    }
    movData();
}, [page]);

return (
    <Context.Provider value={{ ...movie, page, setPage, videoKeys }}>
        {children}
    </Context.Provider>
);
}


export function useGlobal(){
  return useContext(Context)
}

