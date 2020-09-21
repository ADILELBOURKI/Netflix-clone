import React from "react";
import "./App.css";
import Row from "./row.component";
import requests from "./request";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Row
        title="netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      {/* <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} /> */}
    </div>
  );
}
export default App;
