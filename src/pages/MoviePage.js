import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MoviePage() {
  //   const route_parameters = useParams(); //useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  //   const imdb_id = route_parameters.imdb_id; // OR const {imdb_id} = useParams()
  const { imdb_id } = useParams();
  console.log("what is route paramerts?", { imdb_id });

  const [movieData, set_movieData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=cfa1dcb4&i=${imdb_id}`
      ); // specific endpoint i=for id);
      console.log("Where all dynamic datas?", response);
      set_movieData(response.data);
    }
    fetchData();
  }, [imdb_id]);

  return (
    <div>
      <p>{imdb_id}</p>
    </div>
  );
}
export default MoviePage;
