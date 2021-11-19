import React, { useState, useEffect } from "react";
import axios from "./axios";

import DetailCard from "./DetailCard";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [openDialogueBox, setOpenDialogueBox] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
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

  const handleClick = (movie) => {
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
    //   movieTrailer(movie?.name || "")
    //     .then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       setTrailerUrl(urlParams.get("v"));
    //     })
    //     .catch((error) => console.log(error));
    // }
    console.table(movie);
    setOpenDialogueBox(true);
    setSelectedMovie(movie);
    console.log(openDialogueBox);
    // setOpenDialogueBox(false);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt="Anything"
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
          />
        ))}
      </div>
      {openDialogueBox && (
        <DetailCard movie={selectedMovie} popUp={setOpenDialogueBox} />
      )}
    </div>
  );
};

export default Row;
