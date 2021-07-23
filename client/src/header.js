import React, { useState } from "react";
import { render } from "react-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import WikiSearch from "./wiki";
import AlbumData from "./Albums";

const useStyles = makeStyles({
  root: {
    textAlign: "left",
    marginBottom: "1rem",
    padding: "1rem",
    // backgroundColor: "#303030",
    color: "#FFFFFF",
  },
  anchorcolor: {
    textDecoration: "none",
    color: "#b2b2b2;",
    fontSize: "35px",
    // borderBottom: "1px solid red",
    padding: 20,
    cursor: "pointer",
    fontWeight: 600,
    "&:hover": {
      color: "Black",
    },
    "@media (max-width: 480px)": {
      paddingLeft: "10px !important",
      fontSize: "15px",
    },
  },
});

export default function AlbumHeader() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [appleResponse, setAppleResponse] = React.useState(null);
  const getAppleData = () => {
    fetch("/apple/")
      .then((result) => result.json())
      .then((body) => setAppleResponse(body));
  };

  const onAppleClick = () => {
    setState(true);
    getAppleData();
  };

  return (
    <>
      <header className={classes.root}>
        <span className={classes.anchorcolor} onClick={() => setState(false)}>
          Search Wiki
        </span>
        <span className={classes.anchorcolor} onClick={onAppleClick}>
          Top Albums
        </span>
      </header>
      <hr />
      {state ? <AlbumData appleResponse={appleResponse} /> : <WikiSearch />}
    </>
  );
}
