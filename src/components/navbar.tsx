import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `relative px-2 py-1 transition
        ${isActive
            ? "text-fuchsia-600 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-fuchsia-700/80 rounded-xl"
            : "text-slate-700 hover:text-fuchsia-600 hover:bg-gray-300 rounded-xl"
        }`

    return (
        <nav className="mt-1 w-full bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-360 items-center justify-between px-6 py-4 bg-gray-200 rounded-full">
                <div className="navbar-logo">GuideBook™</div>

                <div className="flex gap-8">
                    <NavLink className={navLinkClass} to="/">Home</NavLink>
                    <NavLink className={navLinkClass} to="/guide">Guides</NavLink>
                    <NavLink className={navLinkClass} to="/resources">Resources</NavLink>
                    <NavLink className={navLinkClass} to="/about">About</NavLink>
                </div>

                <Link className="navbar-button" to="/guide">Get Started</Link>
            </div>
        </nav>
    );
}

export default Navbar;