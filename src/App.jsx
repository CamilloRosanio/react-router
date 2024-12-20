// # UTILITY
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";


// # LAYOUTS
import DefaultLayout from "./layouts/DefaulLayout";


// # PAGES
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsIndexPage from "./pages/PostsIndexPage";
import PostsShowPage from "./pages/PostsShowPage";


// Struttura base del Router di REACT

function App() {
  return (
    <>

      {/* BROWSER-ROUTER */}
      <BrowserRouter>

        {/* ROUTES */}
        <Routes>

          {/* LAYOUT (+OUTLET) */}
          <Route Component={DefaultLayout}>

            {/* ROUTE (dirette) */}
            <Route index Component={HomePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>

            <Route path="*" Component={NotFoundPage}></Route>

            <Route path="/posts">
              {/* ROUTE (nested) */}
              <Route path="" Component={PostsIndexPage}></Route>

              {/* ROUTE (nested + param) */}
              <Route path=":id" Component={PostsShowPage}></Route>
            </Route>
          </Route>


        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
