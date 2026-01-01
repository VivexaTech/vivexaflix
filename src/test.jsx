// import { useEffect } from "react";
// import { useGlobal } from "./MoviesData";
// import { useState } from "react";

// export default function TestApi() {
//     const { movie } = useGlobal();


// const [videoKeys, setVideoKeys] = useState({});

// useEffect(() => {
//     const fetchVideos = async () => {
//         const api_key = "af5bbda93fd08d621f0a5f3e33cf0c0b";
//         let tempKeys = {};

//             movie.map(async (item) => {
//                 const res = await fetch(
//                     `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${api_key}`
//                 );
//                 const data = await res.json();

//                 if (data.results && data.results.length > 0) {
//                     tempKeys[item.id] = data.results[0].key;
//                 }
//             })

//         setVideoKeys(tempKeys);
//     };

//     fetchVideos();
// }, [movie]);
// console.log(videoKeys);
// // console.log(movie);






//     return (
//         <>
//             {movie.map((item) => (
//                 <p key={item.id} >{item.title} {item.id} {videoKeys[item.id]}</p>
//             ))}
//         </>
//     );
// }
