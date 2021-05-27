import React, { useState, useEffect } from "react";
import "./style.scss";
import { Movie } from "../../../interfaces/types";
import MovieCard from "../MovieCard/MovieCard";

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const moviesList =
    movies === null ? null : (
      <div className="moviesList">
        {movies?.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    );

  return (
    <div className="nowPlayingContainer">
      <div className="nav">
        <div>Now Playing</div>
      </div>
      {moviesList}
    </div>
  );
};

export default NowPlaying;
