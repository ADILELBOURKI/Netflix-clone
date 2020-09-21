import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
const imgUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className="movie-poster"
            key={movie.id}
            src={`${imgUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            style={{ height: "150px", width: "100px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
