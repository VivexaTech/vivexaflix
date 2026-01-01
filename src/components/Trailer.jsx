export default function Trailer({ videoKey, poster, title, des }) {
  return (
    <section className="trailer-section mb-5">
      <div className="container-fluid p-3 p-md-5">

        {/* Header
        <div className="row mb-4">
          <div className="col-12">
            <span className="badge streaming-badge mb-2">Now Streaming</span>
            <h1 className="movie-title text-white">{title}</h1>
          </div>
        </div> */}

        <div className="row g-4 align-items-stretch">

          {/* CARD 1: Poster + Description */}
          <div className="col-xl-3 col-lg-4 d-none d-lg-block">
            <div className="media-card h-100">

              <img
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt={title}
                className="poster-img"
              />

              <div className="card-body-custom">
                <p className="movie-description">
                  {des}
                </p>
              </div>

            </div>
          </div>

          {/* CARD 2: Trailer Video */}
          <div className="col-xl-9 col-lg-8">
            <div className="media-card h-100">

              {/* Video */}
              <div className="ratio ratio-16x9 video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&modestbranding=1&rel=0`}
                  title="Trailer"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Info */}
              <div className="card-body-custom info-pane">
                <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                  <span className="match">98% Match</span>
                  <span className="meta">2022</span>
                  <span className="meta-box">TV-14</span>
                  <span className="meta-box">HD</span>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <button className="btn play-btn">▶ Play</button>
                  <button className="btn more-btn">+ My List</button>
                </div>

                {/* Mobile Description */}
                <p className="movie-description d-block d-lg-none mt-3">
                  {des}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
