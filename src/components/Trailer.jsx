export default function Trailer({ videoKey, poster, title, des, date }) {
  return (
            <div class="col-lg-8">
                <div class="video-container">
                    <iframe width="100%" height="100%" 
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                        title="Vivexa Player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div class="movie-detail-head">
                    <div class="d-flex justify-content-between align-items-start flex-wrap gap-3">
                        <div>
                            <h2 class="fw-800 mb-1">{title}</h2>
                            <p class="text-secondary">{date} • Action, Sci-Fi • 3h 2m • <span class="text-info">Ultra HD</span></p>
                        </div>
                        <div class="d-flex gap-2">
                            <a href="#" class="action-btn"><i class="bi bi-plus-lg"></i> My List</a>
                            <a href="#" class="action-btn"><i class="bi bi-share"></i> Share</a>
                            <a href="#" class="action-btn text-danger"><i class="bi bi-heart-fill"></i> 12k</a>
                        </div>
                    </div>
                    <hr class="opacity-10 my-4"/>
                    <h5 class="fw-bold mb-3">Storyline</h5>
                    <p class="text-secondary opacity-75" style={{maxwidth: "800px", lineheight: "1.6"}}>{des}                    </p>
                </div>
            </div>

  );
}
