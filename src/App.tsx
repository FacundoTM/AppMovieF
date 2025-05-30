import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import FullMovie from "./components/FullMovie";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";

type Movie = {
  id: number;
  original_title: string;
  name: string;
  overview: string;
  poster_path: string;
};

function App() {
  const [moviesList, setMoviesList] = useState<Movie[] | null>(null);
  const notify = () =>
    toast.error("No se encontraron peliculas..", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  async function fetchBusqueda(busqueda: string) {
    const url = import.meta.env.VITE_APIURL;
    const foundMovies = await axios.get(`${url}?busqueda=${busqueda}`);
    foundMovies.data.results.length === "0"
      ? setMoviesList(foundMovies.data.results)
      : notify();
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar logo="AppMovie" fetchBusqueda={fetchBusqueda} />
                <Hero />
              </>
            }
          />
          <Route
            path="catalogo/:pagina"
            element={
              <>
                <Navbar logo="AppMovie" fetchBusqueda={fetchBusqueda} />
                <br />
                <ToastContainer />
                <Container
                  moviesList={moviesList}
                  setMoviesList={setMoviesList}
                />
              </>
            }
          />
          <Route
            path="/pelicula/:id"
            element={
              <>
                <Navbar logo="AppMovie" fetchBusqueda={fetchBusqueda} />
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
