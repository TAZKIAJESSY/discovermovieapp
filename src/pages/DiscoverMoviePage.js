import { useState } from "react";
import MovieItem from "../components/MovieItem";
import axios from "axios";

function DiscoverMoviePage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("idle");
  const [movie, set_movie] = useState([]);

  async function submitHere(event) {
    event.preventDefault();

    if (searchText === "") {
      set_searchState("idle");
    }

    set_searchState("searching");

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=cfa1dcb4&s=${queryParam}`
    );
    console.log("Can you see me?", response);
    set_searchState("done");
    set_movie(response.data.Search);
  }
  return (
    <div>
      <h1>Discover Some Movies!</h1>
      <form onSubmit={submitHere}>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />{" "}
        <button type="submit">Click me</button>
      </form>
      {searchState === "idle" ? <p>Search for your favourite movies!</p> : null}
      {searchState === "searching" ? <p>Loading...</p> : null}
      {searchState === "done" ? (
        <div>
          <h2>Search Results!</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {movie.map((m, index) => {
              return (
                <MovieItem
                  key={index}
                  title={m.Title}
                  year={m.Year}
                  imbd_id={m.imdbID}
                  poster={m.Poster}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DiscoverMoviePage;
