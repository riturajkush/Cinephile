import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Landing from "./Landing.js";
//import Banner from "./Banner1";
import Nav from "./Nav";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Row
        title="NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        //  isLargeRow
      />
      <Row title="Amazon Prime" fetchUrl={requests.fetchAmazon} />
      <Row title="Disney + Hotstar" fetchUrl={requests.fetchHotstar} />
      <Row title="HBO" fetchUrl={requests.fetchHboeu} />
      <Row title="Hulu" fetchUrl={requests.fetchHulu} />
      <Footer />
      <Row />
    </div>
  );
}

export default App;
