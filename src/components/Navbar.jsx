// UTILITY
import { NavLink } from "react-router";


// COMPONENT EXPORT

export default function Navbar() {
    return <>
        <nav className="debug">
            <NavLink to="/" className="debug">Home</NavLink>
            <NavLink to="/about" className="debug">About</NavLink>
        </nav>
    </>
}