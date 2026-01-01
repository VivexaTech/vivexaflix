

export default function MovieCard({ title, poster, date, popularity, id }) {
    const popul = Math.round(popularity);
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="result-card">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} classNameName="movie-img" />
                    <div className="result-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="mb-0 fw-bold">{title}</h6>
                            <span className="badge bg-dark border border-secondary">4K</span>
                        </div>
                        <p className="small text-secondary mb-3">{date} • Popularity • {popul}%</p>
                        <div className="d-grid">
                            <a href={`https://www.youtube.com/watch?v=${id}`} className="btn btn-watch">
                                <i className="bi bi-play-fill"></i> Watch Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}