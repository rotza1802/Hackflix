import React from "react";
import { useState, useEffect } from "react";
import Rating from "react-rating";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieCard({ movieFilter, setMovieFilter }) {
  const [pageMovies, setPageMovies] = useState(1);

  const searchingMovie = (movieFilter) => {
    return function (search) {
      return search.title.toLowerCase().includes(movieFilter) || !movieFilter;
    };
  };

  const [data, setData] = useState([]);
  let error = "";

  const filteredMovies = data.filter(searchingMovie(movieFilter));

  if (filteredMovies.length === 0) {
    error = "no existe la pelicula buscada";
  }

  const [movieAxios, setMovieAxios] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight && setPageMovies((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=db029ce4f3796b145ed3bfd92f58a797&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageMovies}&with_watch_monetization_types=flatrate`
      );
      setMovieAxios([...movieAxios, ...response.data.results]);
    };
    getMovie();
  }, [pageMovies]);

  useEffect(() => {
    setData(movieAxios);
  }, [movieAxios]);

  return (
    <>
      <div>
        <p className="text-center">
          Filtrar por rating :
          <Rating
            className="rating"
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fa fa-star fa-2x"
            onChange={(rate) => {
              let filteredMovies = movieAxios.filter(
                (movie) => Math.ceil(movie.vote_average / 2) === rate
              );
              setData(filteredMovies);
            }}
          />
        </p>
      </div>
      <div
        class="alert alert-warning alert-dismissible fade show text-center"
        role="alert"
      >
        <strong>En este caso se utilizo el metodo scroll infinito</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      {filteredMovies.map((movie) => (
        <div className="col-md-2 py-2">
          <Link to={`/pelicula/${movie.id}`}>
            <img
              className="img-fluid indivialMovie shadow rounded"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      ))}
      {error && <p>{error}</p>}
    </>
  );
}

export default MovieCard;
