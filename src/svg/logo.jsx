import React, { Fragment } from 'react';
import img from'../assets/nuvem-logo.svg';
import bola3 from'../assets/bola-3.svg';
import bola2 from'../assets/bola-2.svg';
import diego from'../assets/logo.png';
import bola1 from'../assets/bola-1.png';
import sound from'../assets/btn-sound.svg';

const Logo = () => {
  return (
    <Fragment>
      <a href="https://open.spotify.com/artist/4SRTVstKXJY7QYS89BCYfm" target="_blank" rel="noopener noreferrer" className="btn-sound" title="Listen Filelife">
          <img src={sound} alt="Listen Filelife" />
        </a>
      <div className="logo">
        <img src={diego} className="black-logo rotate-6" alt="Diego Tauchert" />
        <img src={img} alt="Diego Tauchert" />
        <div className="circles">
          <img src={bola1} alt="Diego Tauchert" />
          <img src={bola2} alt="Diego Tauchert" />
          <img src={bola3} alt="Diego Tauchert" />
        </div>
      </div>
    </Fragment>
  );
}
export default Logo;