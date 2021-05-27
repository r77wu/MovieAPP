import React, { useState } from "react";
import Nav from "./Nav/Nav";
import NowPlaying from "./NowPlaying/NowPlaying";
import Search from "./Search/Search";
import "./style.scss";
import { Movie } from "../../interfaces/types";
import SearchResult from "./SearchResult/SearchResult";

const Main: React.FC = () => {
  const [searchMovies, setSearchMoves] = useState<Movie[] | null>(null);

  return (
    <div className="main">
      <div className="mainContainer">
        <Nav />
        <Search setSearchMoves={setSearchMoves} />
        {searchMovies === null ? (
          <NowPlaying />
        ) : (
          <SearchResult
            searchMovies={searchMovies}
            setSearchMoves={setSearchMoves}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
