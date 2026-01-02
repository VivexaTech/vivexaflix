import { Link } from "react-router-dom"
export default function Slider({ poster ,id}) {
    return (
        <>
                <div class="col-4 col-md-3 col-lg-2">
                     <Link to={`/preview/${id}`}><div class="card-trending">
                        <img src={`https://image.tmdb.org/t/p/w500/${poster}`}
                            class="w-100 h-100 object-fit-cover" alt="movie" />
                    </div>
                    </Link>
                </div>
        </>
    )
}