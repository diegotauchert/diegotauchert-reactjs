import React from "react";

import reactLogo from "../assets/stack/react.png";
import laravelLogo from "../assets/stack/laravel.png";
import nodeLogo from "../assets/stack/node.png";
import cssLogo from "../assets/stack/css3.png";

const Stack = (props) => {
  return (
    <div className="stack">
      <img src={reactLogo} alt="React & React Native" />
      <img src={nodeLogo} alt="Node JS" />
      <img src={laravelLogo} alt="Laravel PHP" />
      <img src={cssLogo} alt="CSS" />
    </div>
  );
};
export default Stack;
