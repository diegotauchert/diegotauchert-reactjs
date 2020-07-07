import React from "react";
import ReactDOM from "react-dom";
import ParallaxComponent from "./components/Parallax";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { detect } from "detect-browser";
import * as serviceWorker from "./serviceWorker";

const browser = detect();

document.body.classList.add(browser.name, window.screen.width);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet defaultTitle="Diego Tauchert">
        <link rel="canonical" href="https://diegotauchert.com" />
        <meta
          name="description"
          content="This is a personal portfolio of Diego Tauchert, Full Stack Developer"
        />
      </Helmet>
    </HelmetProvider>
    <ParallaxComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
