import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="sidebar">
            <div className="logo mb-5 d-none d-lg-block">
                <svg width="40" height="40" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="grad1">
                            <stop offset="0%" stopColor="#bf5af2" />
                            <stop offset="100%" stopColor="#0a84ff" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="url(#grad1)"
                    />
                </svg>
            </div>

            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                }
            >
                <i className="bi bi-house-door"></i>
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/movies"
                className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                }
            >
                <i className="bi bi-play-circle"></i>
                <span>Movies</span>
            </NavLink>

            <NavLink
                to="/action"
                className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                }
            >
                <i className="bi bi-trophy"></i>
                <span>Sports</span>
            </NavLink>

            <NavLink
                to="/search"
                className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                }
            >
                <i className="bi bi-search"></i>
                <span>Search</span>
            </NavLink>

            {/* <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `sidebar-item mt-lg-auto mb-lg-4 ${isActive ? "active" : ""}`
                }
            >
                <i className="bi bi-person"></i>
                <span>Profile</span>
            </NavLink> */}
        </nav>
    );
}
