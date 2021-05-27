import React, { useState, useEffect } from "react";
import "./style.scss";
import { Movie } from "../../../interfaces/types";
import PopularMovieCard from "../PopularMovieCard/PopularMovieCard";

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results.slice(0, 3)));
  }, []);

  const popularMoviesList =
    popularMovies === null ? null : (
      <div>
        {popularMovies.map((movie) => {
          return <PopularMovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    );
  return (
    <div className="popularMoviesContainer">
      <div className="popularMoviesSectionTitle">Popular Movies</div>
      {popularMoviesList}
    </div>
  );
};

export default PopularMovies;
