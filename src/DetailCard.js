import React from "react";
import "./detailcard.css";
const base_url = "https://image.tmdb.org/t/p/original";

const DetailCard = ({ movie, popUp }) => {
  const handleClick = () => {
    popUp(false);
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className={popUp ? "detail--card active" : "detail--card"}>
      <div class="content--container">
        <div className="detail--poster-content">
          <img
            className="row-poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
          <div class="detail--poster-content_text">
            <h2>{movie?.name || movie?.title}</h2>
            <p className="release">
              Release Date: {movie?.first_air_date || movie?.release_date}
            </p>
            <p className="overview">{truncate(movie?.overview, 110)}</p>
            <p className="rating">
              <strong>Rating:</strong> {movie?.vote_average}/10 <br />
              <span>Total Votes:{movie?.vote_count}</span>
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>x</button>
    </div>
  );
};

export default DetailCard;
