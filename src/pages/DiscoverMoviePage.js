import { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function DiscoverMoviePage() {
  const { searchinput } = useParams();
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("idle");
  const [movie, set_movie] = useState([]);

  const history = useHistory();

  // async function submitHere(event) {
  //   event.preventDefault();

  //   if (searchText === "") {
  //     set_searchState("idle");
  //   }

  //   set_searchState("searching");

  //   const queryParam = encodeURIComponent(searchText);

  //   const response = await axios.get(
  //     `https://omdbapi.com/?apikey=cfa1dcb4&s=${queryParam}`
  //   );
  //   console.log("Can you see me?", response);
  //   set_searchState("done");
  //   set_movie(response.data.Search);
  // }

  const navigateToSearch = (e) => {
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    async function fetchData() {
      if (!searchinput || searchinput === "") {
        //if searchInput not defined or empty then set to idle just return this other than go check lower steps
        set_searchState("idle");
        return;
      }

      set_searchState("searching");

      const route_param = encodeURIComponent(searchinput);

      const response = await axios.get(
        `https://omdbapi.com/?apikey=cfa1dcb4&s=${route_param}`
      );
      console.log("What are dynamic datas?", response);

      console.log("route param:", route_param);

      set_searchState("done");
      set_movie(response.data.Search);
    }
    fetchData();
  }, [searchinput]);

  return (
    <div>
      <h1>Discover Some Movies!</h1>
      <form onSubmit={navigateToSearch}>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />{" "}
        <button type="submit">Click me</button>
      </form>
      {searchState === "idle" ? <p>Search for your favourite movies!</p> : null}
      {searchState === "searching" ? <p>Loading...</p> : null}
      {searchState === "done" ? (
        movie && movie.length > 0 ? (
          <div>
            <h2>Search Results!</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {movie.map((m, index) => {
                return (
                  <MovieItem
                    key={index}
                    title={m.Title}
                    year={m.Year}
                    imdbID={m.imdbID}
                    poster={m.Poster}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <p>No Results found...</p>
        )
      ) : null}
    </div>
  );
}

export default DiscoverMoviePage;
