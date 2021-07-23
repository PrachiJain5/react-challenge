import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { FormHelperText } from "@material-ui/core";
// import WikiList from "./WikiList";
// import "./WikiSearch.css";

const useStyles = makeStyles({
  Search: {
    margin: "0px 40px 0px 40px",
    "@media (max-width: 480px)": {
      paddingTop: "30px",
      margin: "0px 24px 0px 24px !important",
    },
  },
  wikiSearchBox: {
    display: "flex",
    borderRadius: ".25rem",
  },
  wikiInput: {
    padding: "10px",
    width: "430px",
    borderRadius: "20px",
  },
  SearchLabel: {
    textAlign: "left",
    fontSize: 25,
  },
  wikiSearchButton: {
    display: "flex",
  },
  searchResults: {
    border: "1px solid gray",
    borderRadius: "20px",
    textAlign: "left",
    padding: "10px",
    // width: "500px",
    marginTop: "20px",
  },

  resultTitle: {
    fontSize: "24px",
  },
});

export default function WikiSearch() {
  const classes = useStyles();
  const [wikiResponse, setWikiResponse] = useState(null);
  const [input, setInput] = useState("");
  const getWikiData = () => {
    // fetch(
    //   `/wiki?format=json&action=query&list=search&srsearch=${"apple"}&origin=*`
    // )
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${input}&origin=*`
    )
      .then((result) => result.json())
      .then((body) => setWikiResponse(body));
  };

  return (
    <div className={classes.Search}>
      <div className={classes.SearchLabel}>
        <label htmlFor="search-box">Search Wiki Term</label>
      </div>
      <br />
      <div className={classes.wikiSearchBox}>
        <input
          id="search-box"
          placeholder="Search Text..."
          className={classes.wikiInput}
          required
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button className={classes.wikiSearchButton} onClick={getWikiData}>
        Wiki Search
      </button>
      {wikiResponse &&
        wikiResponse.query.search.map((results) => (
          <div className={classes.searchResults}>
            <div className={classes.resultTitle}>{results.title}</div>
            <div>{results.snippet.replace(/(<([^>]+)>)/gi, "")}</div>
          </div>
        ))}
    </div>
  );
}
