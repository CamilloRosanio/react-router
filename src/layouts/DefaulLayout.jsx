// UTILITY
import { Outlet } from "react-router-dom";


// COMPONENTS IMPORT
import Navbar from "../components/Navbar";


// COMPONENT EXPORT

export default function DefaultLayout() {
    return <>
        <header>
            <Navbar />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            Footer
        </footer>
    </>
}