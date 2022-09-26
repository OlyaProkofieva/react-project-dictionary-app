import React from "react";

export default function Examples(props) {
  if (props.example && props.example.length > 0) {
    return (
      <div className="Examples">
        <strong>Example : </strong>
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
