import "../App.css";
import React from "react";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [page, setPage] = useState(1);
  const [filtro, setFiltro] = useState("");
  const [movieAxios, setMovieAxios] = useState([]);
  useEffect(() => {
    const getpeliculas = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6db4df4e88d836d4a167af428a0fe9eb&query=${filtro}&page=${page}`
      );
      setMovieAxios(response.data.results);
    };
    getpeliculas();
  }, [page, filtro]);
  return (
    <div>
      <div className="header">
        <div className="container pt-2">
          <Header />
        </div>
      </div>

      <div className="container mt-3">
        <div
          class="alert alert-warning alert-dismissible fade show text-center"
          role="alert"
        >
          <strong>En este caso se utilizo el metodo paginación</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div className="bg-light text-center p-3 shadow m-auto rounded">
          <h2>Ingrese el nombre de la pelicula </h2>
          <input
            className="search rounded p-1 mt-3"
            type="text"
            name="movieFilter"
            id="nameMovie"
            onChange={() => {
              setFiltro(
                document.querySelector("#nameMovie").value.toLowerCase()
              );
              setPage(1);
            }}
          />
        </div>
        {filtro.length > 0 && (
          <div>
            {page > 1 ? (
              <a
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                {" "}
                <button className="btn btn-danger">Atras</button>{" "}
              </a>
            ) : (
              <a> </a>
            )}
            Page: {page}
            <a
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {" "}
              <button className="btn btn-success">Siguiente</button>{" "}
            </a>
          </div>
        )}

        <div className="row mt-3">
          {movieAxios.map((movie) => (
            <div className="col-sm-2 p-2 ">
              <Link to={`/pelicula/${movie.id}`}>
                <img
                  className="img-fluid shadow rounded"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
          {/* {error && <p>{error}</p>} */}
        </div>
      </div>
    </div>
  );
}

export default Search;
