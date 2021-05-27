import React, { useState, useEffect } from "react";
import { useParams, withRouter, useHistory } from "react-router-dom";
import { MovieInformation } from "../../interfaces/types";
import "./style.scss";
import logo from "../../assets/logo.png";

interface ParamTypes {
  id: string | undefined;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  let history = useHistory();

  const [movieDetail, setMovieDetail] = useState<MovieInformation | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, [id]);

  function handleClick() {
    history.goBack();
  }

  const movieDetailSection =
    movieDetail === null ? null : (
      <div className="movieDetailContainer">
        <div
          className="movieDetailPoster"
          style={{
            background: `url('https://image.tmdb.org/t/p/w1280/${movieDetail?.backdrop_path}') no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="movieDetailGradient">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
              alt="poster"
            />
          </div>
        </div>
        <div className="movieDetailGeneral">
          <h2>{movieDetail.title}</h2>
          <div className="movieDetailInfo">
            <div>
              <strong>Release date: </strong>
              {movieDetail.release_date}
            </div>
            <div>
              <strong>Run time: </strong>
              {movieDetail.runtime} min
            </div>
            <div className="movieDetailgenres">
              <strong>Genres: </strong>
              <div>
                {movieDetail.genres.map((item) => {
                  return <span key={item.id}>{item.name}</span>;
                })}
              </div>
            </div>
            <div>
              <strong>User score: </strong>{" "}
              <span
                style={{
                  color: movieDetail.vote_average > 7.5 ? "#2a9d8f" : "#e9c46a",
                }}
              >
                {movieDetail.vote_average}
              </span>
            </div>
          </div>
          <div className="movieDetailOverview">
            <h3>Overview</h3>
            <div className="movieDetailDescription">{movieDetail.overview}</div>
          </div>
        </div>
      </div>
    );
  return (
    <main className="movieDetailSection">
      <div className="movieDetailNav">
        <div className="movieDetailLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="movieDetailMenu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="movieDetailBack">
        <button onClick={handleClick}>Back</button>
      </div>
      {movieDetailSection}
    </main>
  );
};

export default withRouter(MovieDetail);
