import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center">
      <div className="search-form">
        <h1>Dictionary</h1>
        <p>What we are searching for?</p>
        <form onSubmit={search}>
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
      <Results results={results} />
    </div>
  );
}
