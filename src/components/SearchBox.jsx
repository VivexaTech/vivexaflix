export default function SearchBox() {
    return (
        <>
            <div className="search-container">
                <div className="search-bar-wrapper">
                    <i className="bi bi-search search-icon"></i>
                    <input type="text" className="search-input" placeholder="Search for movies, live sports, or actors..." autofocus />
                </div>
            </div>
        </>
    )
}