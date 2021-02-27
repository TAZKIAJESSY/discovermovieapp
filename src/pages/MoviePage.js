import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MoviePage() {
  //   const route_parameter = useParams();
  //   console.log(route_parameter);
  //   useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  //   const imdb_id = route_parameter.imdb_id;

  const { imdb_id } = useParams();

  const [movieData, set_movieData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=cfa1dcb4&i=${imdb_id}`
      );
      console.log("What are dynamic datas?", response);
      set_movieData(response.data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      {movieData ? (
        <>
          <h1>{movieData.Title}</h1>
          <h2>{movieData.Genre}</h2>

          <img src={movieData.Poster} alt={movieData.Title} />
          <p>Director: {movieData.Director}</p>
          <p>Language: {movieData.Language}</p>
          <p>Plot: {movieData.Plot}</p>
        </>
      ) : (
        <p>Loading....</p>
      )}
      {/* <p>{imdb_id}</p>; */}
    </div>
  );
}
export default MoviePage;
