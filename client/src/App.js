import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AlbumData from "./Albums";
import WikiSearch from "./wiki";
import AppHeader from "./header";

function App() {
  return (
    <div className="App">
      {/* <WikiSearch />
      <AlbumData /> */}
      <AppHeader />
    </div>
  );
}

export default App;
