import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "../App.css";
import Rating from "react-rating";

function IndividualMovie({ match }) {
  const [individualMovie, setIndividualMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `http://api.themoviedb.org/3/movie/${match.params.id}?api_key=db029ce4f3796b145ed3bfd92f58a797`
      );
      setIndividualMovie(response.data);
    };
    getMovie();
  }, [match.params.id]);

  return (
    <div>
      <div className="header">
        <div className="container pt-2">
          <Header />
        </div>
      </div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-6">
            <img
              class="img-fluid movieId w-100 rounded "
              src={`https://image.tmdb.org/t/p/w500${individualMovie.poster_path}`}
            />
          </div>
          <div class="col-md-6">
            <h2>{individualMovie.title}</h2>
            <p>{individualMovie.overview}</p>
            <p>Fecha de lanzamiento : {individualMovie.release_date}</p>
            <p>
              Rating :
              <Rating
                placeholderRating={individualMovie.vote_average / 2}
                className="rating"
                emptySymbol="far fa-star fa-2x"
                placeholderSymbol="fa fa-star fa-2x"
                readonly
              />
            </p>
            <a className="btn btn-primary" href="/">
              Voler al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualMovie;
