import React, { useState } from "react";
import { Await } from "react-router-dom";
import "./App.css";

function Apps() {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const getTracks = async () => {
    let data = await fetch(
      "https://v1.nocodeapi.com/vannovich/spotify/iYwIXDvRZHdfiezn/search?q=" +
        keyword +
        "&type=track"
    );
    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
  };
  return (
    <div>
      <nav className="search-container">
        <div className="title">
          <span>MUZIKA</span>
          <a className="navbar-brand" href="#"></a>
          <div className="search-box" id="navbarSupportedContent">
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={getTracks} className="search-button ">
              Search
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6"></div>
          {tracks.map((element) => {
            return (
              <div key={element.id} className="col-lg-3 col-md-6 py-2">
                <div className="card">
                  <img
                    src={element.album.images[0].url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">
                      Artist: {element.album.artists[0].name}
                    </p>
                    <p className="card-text">
                      Artist: {element.album.release_date}
                    </p>
                    <audio
                      src={element.preview_url}
                      controls
                      className="w-100"
                    ></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Apps;
