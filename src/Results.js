import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results text-center">
        <div className="main-info">
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter((phonetic) => phonetic.audio !== "")
            .map(function (phonetic, index) {
              if (index < 1) {
                return (
                  <div key={index}>
                    <Phonetics phonetic={phonetic} />
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
