// UTILITY
import { NavLink } from "react-router";


// COMPONENT EXPORT

export default function Navbar() {
    return <>
        <nav className="debug">
            <NavLink to="/" className="debug nav-link">Home</NavLink>
            <NavLink to="/about" className="debug nav-link">About</NavLink>

            <NavLink to="/posts" className="debug nav-link">Posts</NavLink>
        </nav>
    </>
}