import React from "react";
import { Link } from "react-router-dom";

function MovieItem(props) {
  return (
    <div style={{ width: "25%", padding: 10, boxSizing: "border-box" }}>
      <Link to={`/movie/${props.imdbID}`}>
        <h1>{props.title}</h1>
      </Link>
      <h2>{props.year}</h2>
      <h3>{props.imdbID}</h3>
      <div>
        <img src={props.poster} alt={props.title} />
      </div>
    </div>
  );
}

export default MovieItem;
