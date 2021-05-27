import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Movie } from "../../../interfaces/types";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movieCard">
      <div className="poster">
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "#000000" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      </div>

      <div className="info">
        <div className="title">
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {movie.title}
          </Link>
        </div>

        <div
          className="rate"
          style={{ color: movie.vote_average > 7.5 ? "#2a9d8f" : "#e9c46a" }}
        >
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
