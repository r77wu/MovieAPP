import React, { Dispatch, SetStateAction } from "react";
import "./style.scss";
import { Movie } from "../../../interfaces/types";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
  searchMovies: null | Movie[];
  setSearchMoves: Dispatch<SetStateAction<null | Movie[]>>;
}

const SearchResult: React.FC<Props> = ({ searchMovies, setSearchMoves }) => {
  const handleCancelSearch = () => {
    setSearchMoves(null);
  };

  const moviesList =
    searchMovies === null ? null : (
      <div className="searchResultMoviesList">
        {searchMovies?.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    );
  return (
    <div className="searchResultContainer">
      <div className="searchResultnav">
        <div>Search Result</div>
        <div>
          <button className="searchResultCancel" onClick={handleCancelSearch}>
            Cancel
          </button>
        </div>
      </div>
      {moviesList}
    </div>
  );
};

export default SearchResult;
