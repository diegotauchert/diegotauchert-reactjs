import React, { Fragment } from 'react';
import img from'../assets/diego.png';

const Diego = () => {
  return (
    <Fragment>
      <div className="profile-button">
        <a href="https://www.linkedin.com/in/diegotauchert/" target="_blank" rel="noopener noreferrer">My<br />Profile</a>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="78.000000pt" height="71.000000pt" viewBox="0 0 78.000000 71.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,71.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M270 685 c-102 -28 -186 -110 -232 -225 -29 -72 -32 -228 -6 -276 44 -80 103 -116 247 -150 l94 -22 146 72 c80 40 170 82 199 94 l52 23 0 47 c0 146 -112 357 -220 416 -44 24 -67 29 -139 32 -57 3 -105 -1 -141 -11z"/>
          </g>
        </svg>
      </div>

      <img src={img} alt="Diego Tauchert" />
    </Fragment>
  );
}
export default Diego;