import React, { Fragment } from "react";

const Sprite = () => {
  return (
    <Fragment>
      <div className="nav">
        <button className="nav-musician sprite invert">Musician</button>
        <button className="nav-developer sprite invert">Developer</button>
      </div>
      <div className="social-media">
        <span className="block mb-2">
          <i className="sprite invert"></i>
          <label>Contacts</label>
        </span>

        <a
          href="mailto:diego.tauchert@gmail.com"
          className="sprite invert btn-email"
          tooltip="true"
        >
          Email to diego.tauchert@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/diegotauchert/"
          className="sprite invert btn-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.twitter.com/diegotauchert"
          className="sprite invert btn-twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com/diego.tauchert"
          className="sprite invert btn-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.youtube.com/channel/UCF9x5A319JImgGJ6Cb7zhrQ"
          className="sprite invert btn-youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </div>
    </Fragment>
  );
};
export default Sprite;
