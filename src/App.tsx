import React from "react";
import "./styles.css";
import { Login } from "./Components/Login";
import { movies } from "./Components/Movies";
import { usersBase } from "./Components/usersBase";
import { header } from "./Components/header";
import { About } from "./Components/About";

export default function App() {
  return (
    <div className="App">
      <h1>StarMovies</h1>
      <h2>The best Movies</h2>
    </div>
  );
}
