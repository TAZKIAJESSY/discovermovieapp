import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviePage from "./pages/DiscoverMoviePage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/discover" component={DiscoverMoviePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
