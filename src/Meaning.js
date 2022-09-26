import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning text-center">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <Examples example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
