import React, { useState, useEffect } from "react";
import axios from "./axios";
const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // console.table(movies);
  }, [fetchURL]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="Anything"
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
