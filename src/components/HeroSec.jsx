export default function HeroSec() {
  return (
    <div className="hero-card mb-5">
      <div className="hero-content">
        
        <span
          className="badge rounded-pill mb-3"
          style={{ background: "var(--neon-purple)" }}
        >
          LIVE NOW
        </span>

        <h1 className="display-4 fw-800 mb-2">
          TATA WPL 2026
        </h1>

        <p className="text-light opacity-75 mb-4">
          Ultra HD streaming with real-time stats and multi-camera angles.
        </p>

        <div className="d-flex gap-2">
          <button
            className="btn px-4 py-2 fw-bold"
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            Watch Now
          </button>

          <button
            className="btn px-4 py-2 fw-bold"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
            }}
          >
            + My List
          </button>
        </div>

      </div>
    </div>
  );
}
