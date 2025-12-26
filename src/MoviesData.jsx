

export default async function MoviesData() {
  const api_key = "af5bbda93fd08d621f0a5f3e33cf0c0b"
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=2`
  );
  const data = await res.json();
  console.log(data)
  return data;
}

export async function MovieTrailer(id) {
  const api_key = "af5bbda93fd08d621f0a5f3e33cf0c0b"
  
  const vid = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`
  )
  const vdata = await vid.json()
  console.log(vdata)
  return vdata;
  
}


