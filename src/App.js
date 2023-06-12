import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/detail">
            <DetailsPage />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
