import React, { useState, useEffect } from "react";
import "./style.scss";
import { Artist } from "../../../interfaces/types";
import PopularArtistCard from "../PopularArtistCard/PopularArtistCard";

const PopularArtists: React.FC = () => {
  const [popularArtists, setPopularArtists] = useState<Artist[] | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        const artists = data.results.slice(0, 4).filter((artist: Artist) => {
          return artist.known_for_department === "Acting";
        });
        setPopularArtists(artists);
      });
  }, []);

  const popularArtistsList =
    popularArtists === null ? null : (
      <div>
        {popularArtists.map((artist) => {
          return <PopularArtistCard artist={artist} key={artist.id} />;
        })}
      </div>
    );
  return (
    <div className="popularArtistsContainer">
      <div className="popularArtistsSectionTitle">Popular Artists</div>
      {popularArtistsList}
    </div>
  );
};

export default PopularArtists;
