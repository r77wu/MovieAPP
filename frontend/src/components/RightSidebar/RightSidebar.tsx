import React from "react";
import PopularArtists from "./PopularArtists/PopularArtists";
import PopularMovies from "./PopularMovies/PopularMovies";
import "./style.scss";

const RightSidebar: React.FC = () => {
  return (
    <div className="RightSidebar">
      <PopularMovies />
      <PopularArtists />
    </div>
  );
};

export default RightSidebar;
