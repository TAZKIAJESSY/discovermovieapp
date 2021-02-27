import React from "react";

function MovieItem(props) {
  return (
    <div style={{ width: "25%", padding: 10, boxSizing: "border-box" }}>
      <h1>{props.title}</h1>
      <h2>{props.year}</h2>
      <h3>{props.imbd_id}</h3>
      <div>
        <img src={props.poster} alt={props.title} />
      </div>
    </div>
  );
}

export default MovieItem;
