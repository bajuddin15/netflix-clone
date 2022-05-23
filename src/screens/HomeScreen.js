import React from "react";
import requests from "../Requests";
import Banner from "../component/Banner";
import "./HomeScreen.css";
import Navbar from "../component/Navbar";
import Row from "../component/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        key="NETFLIX ORIGINALS"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="false"
      />
      <Row
        key="Trending Now"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        key="Top Rated"
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        key="Action Movies"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        key="Comedy Movies"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        key="Horror Movies"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        key="Romance Movies"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        key="Documentaries"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
