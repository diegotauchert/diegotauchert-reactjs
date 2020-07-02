import React from "react";

import reactLogo from "../assets/stack/react.png";
import laravelLogo from "../assets/stack/laravel.png";
import nodeLogo from "../assets/stack/node.png";
import cssLogo from "../assets/stack/css3.png";
import gitLogo from "../assets/stack/github.png";
import MongoLogo from "../assets/stack/mongo.png";
import MysqlLogo from "../assets/stack/mysql.png";

const Stack = (props) => {
  return (
    <div className="stack carousel-stack">
      <img src={reactLogo} alt="React & React Native" className="black-img" />
      <img src={nodeLogo} alt="Node JS" className="black-img" />
      <img src={laravelLogo} alt="Laravel PHP" className="black-img" />
      <img src={cssLogo} alt="CSS" className="black-img" />
      <img src={gitLogo} alt="GitHub" className="black-img" />
      <img src={MongoLogo} alt="Mongo DB" className="black-img" />
      <img src={MysqlLogo} alt="Mysql" className="black-img" />
    </div>
  );
};
export default Stack;
