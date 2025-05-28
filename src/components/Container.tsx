import { useParams } from "react-router-dom";
import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Loading from "./Loading";

type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
};

function Container() {
  const [moviesList, setMoviesList] = useState<Movie[] | null>(null);

  const url = import.meta.env.VITE_APIURL;
  const { pagina } = useParams<{ pagina?: string }>();
  const numeroPagina = parseInt(pagina ?? "", 10);
  async function fetchMovies() {
    if (pagina && parseInt(pagina) >= 1) {
      const foundMovies = await axios.get(`${url}?page=${pagina}`);
      return foundMovies;
    }
  }

  useEffect(() => {
    async function foundMovies() {
      const response: any = await fetchMovies();

      setMoviesList(response.data.results);
    }
    foundMovies();
  }, []);

  return (
    <>
      {moviesList ? (
        <div className="md:container md:mx-auto" id="movies">
          <div className="pb-5">
            {!isNaN(numeroPagina) ? <Pagination pagina={numeroPagina} /> : ""}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
            {moviesList.map((movie: any) => (
              <div className="h-auto rounded" key={movie.id}>
                <Movie
                  id={movie.id}
                  title={movie.original_title}
                  description={movie.overview.slice(0, 130) + "..."}
                  image={movie.poster_path}
                />
              </div>
            ))}
          </div>
          <div className="float-right pt-5 pb-5">
            {!isNaN(numeroPagina) ? <Pagination pagina={numeroPagina} /> : ""}
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}
    </>
  );
}

export default Container;
