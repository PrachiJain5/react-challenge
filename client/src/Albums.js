import React from "react";
import { render } from "react-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    display: "inline-block",
    margin: "100px 55px 20px 55px",
    maxWidth: 400,
    "@media (max-width: 480px)": {
      margin: "0px !important",
      paddingBottom: "40px",
    },
  },
  imgStyle: {
    minWidth: "100%",
    maxHeight: 300,
  },
});

export default function AlbumData(props) {
  const classes = useStyles();
  // const [appleResponse, setAppleResponse] = React.useState(null);
  // const getAppleData = () => {
  //   fetch("/apple/")
  //     .then((result) => result.json())
  //     .then((body) => setAppleResponse(body));
  // };

  return (
    <>
      {/* <button onClick={getAppleData}>Apple Api call</button> */}
      {props.appleResponse &&
        props.appleResponse.body.feed.results.map((data) => (
          <div className={classes.root}>
            <div key={data.artistId}>
              <img className={classes.imgStyle} src={data.artworkUrl100} />
              <h2>{data.name}</h2>
              <p>{data.artistName}</p>
            </div>
          </div>
        ))}
    </>
  );
}
