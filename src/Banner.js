import "./Banner.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "./Search";
import { useHistory } from "react-router";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={(e) => {
            setShowSearch(!showSearch);
          }}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button
          variant="outlined"
          onClick={() => {
            history.push("/search");
          }}
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
