import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Artist, Movie } from "../../../interfaces/types";

interface Props {
  artist: Artist;
}

const PopularArtistCard: React.FC<Props> = ({ artist }) => {
  return (
    <div className="popularArtistCard">
      <div className="popularArtistPoster">
        <img
          src={`https://image.tmdb.org/t/p/w200/${artist.profile_path}`}
          alt={artist.name}
        />
      </div>
      <div className="popularArtistInfo">
        <div>{artist.name}</div>
        <div>
          <div>Acting:</div>
          <ul className="artistMovies">
            {artist.known_for.map((movie: Movie) => {
              return (
                <Link
                  key={movie.id}
                  to={`/movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "#000000" }}
                  className="artistMovie"
                >
                  {movie.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularArtistCard;
