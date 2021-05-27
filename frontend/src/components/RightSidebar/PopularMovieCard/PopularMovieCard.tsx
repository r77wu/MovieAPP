import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Movie } from "../../../interfaces/types";

interface Props {
  movie: Movie;
}

const PopularMovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="popularMovieCard">
      <div className="popularMoviePoster">
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
      <div className="popularMovieInfo">
        <div>
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {movie.title}
          </Link>
        </div>
        <div> Release date: {movie.release_date}</div>
        <div
          style={{ color: movie.vote_average > 7.5 ? "#2a9d8f" : "#e9c46a" }}
        >
          Score: {movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default PopularMovieCard;
