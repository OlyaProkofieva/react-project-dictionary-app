import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000199c24e91898546d398260acac5a94428";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary text-center">
        <div className="search-form">
          <h1>Dictionary</h1>
          <p>What we are searching for?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word to search"
              className="search-input"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" className="submit-input" />
          </form>
          <p className="suggestion">Such as: love, wine, yoga, etc.</p>
        </div>
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
