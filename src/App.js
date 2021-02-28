import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviePage from "./pages/DiscoverMoviePage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/movie/:imdb_id" component={MoviePage} />
        <Route
          exact
          path="/discover/:searchinput?"
          component={DiscoverMoviePage}
        />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
