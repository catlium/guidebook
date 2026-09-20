import "./resource.css";

function ResourceNavigation() {
  return (
    <nav className="resources-navigation">
      <a href="#guides">All Resources</a>
      <a href="#guides">Guides</a>
      <a href="#guides">Articles</a>
      <a href="#guides">Trending</a>

      <div className="resource-search">
        <input type="text" placeholder="Search resources" />

        <span className="search-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </div>
    </nav>
  );
}

export default ResourceNavigation;