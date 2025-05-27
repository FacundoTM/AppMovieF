import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Loading from "./Loading";

type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  vote_average: GLfloat;
  release_date: string;
};

function FullMovie() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const url = import.meta.env.VITE_APIURL;
  const { id } = useParams<{ id?: string }>();

  async function fetchMovie() {
    if (id && parseInt(id) > 1) {
      const foundMovie = await axios.get(`${url}/${id}`);
      return foundMovie;
    }
  }

  useEffect(() => {
    async function foundMovieById() {
      const response: any = await fetchMovie();

      setMovie(response.data);
    }
    foundMovieById();
  }, []);

  return (
    <>
      <div className="md:container md:mx-auto">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            {movie == null ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
                <div className="md:col-span-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="rounded"
                    alt=""
                  />
                </div>

                <div className="md:col-span-1">
                  <div className="max-w-lg md:max-w-none">
                    {<Rating rating={movie.vote_average} />}
                    <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                      {movie.original_title}
                    </h2>
                    <p>{movie.release_date}</p>

                    <p className="mt-4 text-gray-700">{movie.overview}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FullMovie;
