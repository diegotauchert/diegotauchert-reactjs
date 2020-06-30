import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ParallaxComponent from "./components/Parallax";
import { Helmet } from "react-helmet";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Helmet defaultTitle="Diego Tauchert">
      <link rel="canonical" href="https://diegotauchert.co" />
      <meta
        name="description"
        content="This is a personal portfolio of Diego Tauchert, Full Stack Developer"
      ></meta>
      <script src="./scripts/custom.js" type="text/javascript" />
    </Helmet>
    <ParallaxComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
