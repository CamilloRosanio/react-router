// # UTILITY
import { BrowserRouter, Routes, Route } from "react-router-dom";


// # LAYOUTS
import DefaultLayout from "./layouts/DefaulLayout";


// # PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route Component={DefaultLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
