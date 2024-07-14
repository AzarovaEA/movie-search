import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`${movie.imdbID}`} className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>Rating: {movie.imdbRating}</p>
      </div>
    </Link>
  );
};

export { MovieCard };
