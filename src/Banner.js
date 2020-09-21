import React, { useEffect } from "react";
import axios from "axios";
import requests from "./request";
import { useState } from "react";
const imgUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(requests.fetchComedyMovies);
    //   setMovie(
    //     request.data.results[Math.random() * (request.data.results.length - 1)]
    //   );
    // }
    // fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie.original_name}</h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
      </div> */}
    </header>
  );
};

export default Banner;
