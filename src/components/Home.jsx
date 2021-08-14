import React from "react";
import Header from "./Header";
import MovieCard from "./MovieCard";
import { useState } from "react";
import "../App.css";

function Home() {
  const [movieFilter, setMovieFilter] = useState("");
  return (
    <div>
      <div className="header">
        <div className="container ">
          <Header movieFilter={movieFilter} setMovieFilter={setMovieFilter} />
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <MovieCard
            movieFilter={movieFilter}
            setMovieFilter={setMovieFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
