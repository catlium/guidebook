import "./navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">GuideBook™</div>

            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">Guides</a>
                <a href="#">Resources</a>
                <a href="#">About</a>
            </div>

            <button className="navbar-button">Get Started</button>
        </nav>
    );
}

export default Navbar;