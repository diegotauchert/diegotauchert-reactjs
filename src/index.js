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
        <meta http-equiv="content-language" content="en-US" />
        <meta
          name="keywords"
          content="diego tauchert, web developer, aracaju, musician, filelife, room to farewell, react js, javascript, node, mongo db, laravel, php, parallax, svg"
        />
        <meta
          name="description"
          content="This is a personal portfolio of Diego Tauchert, Full Stack Developer and Musician from Aracaju, Brazil"
        />
        <meta name="author" content="Diego Tauchert" />
        <meta name="copyright" content="© 2020 Diego Tauchert" />
        <meta name="robots" content="index,nofollow" />
        <meta name="generator" content="Visual Studio Code 1.46.1" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.diegotauchert.com" />
        <meta
          property="og:title"
          content="Personal portfolio of Diego Tauchert"
        />
        <meta
          property="og:description"
          content="Full Stack developer since 2008 and musician with a solo project named Filelife, from Aracaju, Brazil"
        />
        <meta property="og:site_name" content="Diego Tauchert" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/diegotauchert/diegotauchert-reactjs/master/src/assets/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="159" />
        <meta property="og:image:height" content="92" />
        <meta name="twitter:site" content="@diegotauchert" />
        <meta name="twitter:creator" content="@diegotauchert" />
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
