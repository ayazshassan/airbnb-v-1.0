import Header from "./Header";
import Home from "./Home";
import "./App.css";
import Search from "@material-ui/icons/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
