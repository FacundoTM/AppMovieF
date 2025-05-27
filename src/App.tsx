import Container from "./components/Container";
import FullMovie from "./components/FullMovie";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar logo="AppMovie" />
                <Hero />
              </>
            }
          />
          <Route
            path="catalogo/:pagina"
            element={
              <>
                <Navbar logo="AppMovie" />
                <br />
                <Container />
              </>
            }
          />
          <Route
            path="/pelicula/:id"
            element={
              <>
                <Navbar logo="AppMovie" />
                <FullMovie />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
