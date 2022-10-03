import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.example && props.example.length > 0) {
    return (
      <div className="Examples">
        <em className="example">{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
