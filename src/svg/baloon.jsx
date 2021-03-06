import React from "react";
import linkedin from "../assets/linkedin.png";
import spotify from "../assets/spotify.png";
import github from "../assets/stack/github.png";

const Baloon = (props) => {
  return (
    <div className="dialog">
      <div className="dialog-body">
        <div className="carousel">
          <div className="social-media-dialog mb-2">
            <a
              href="https://www.linkedin.com/in/diegotauchert/"
              className="lnk-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} width="22" alt="Diego Tauchert Linkedin" />
            </a>
            <a
              href="https://github.com/diegotauchert"
              className="lnk-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} width="22" alt="Diego Tauchert Github" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7tOpUzCPQU8"
              className="sprite btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <span className="uppercase f-70 bold">@DiegoTauchert</span>
          </div>
          <br clear="all" />
          <br />
          <p>
            Hi there
            <br />
            My name is Diego Tauchert
            <br />
            I am a Full Stack Developer with +10 years of experience doing web
            and mobile applications. <br />I specialize in CSS, PHP Laravel, and
            also, JavaScript frameworks such as React and Node.
          </p>
        </div>
        <div className="carousel">
          <div className="social-media-dialog mb-2">
            <a
              href="https://open.spotify.com/artist/4SRTVstKXJY7QYS89BCYfm"
              className="lnk-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={spotify} width="22" alt="Filelife Spotify" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=JWt5U50Pz5M"
              className="sprite btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/filelifeofficial"
              className="sprite btn-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <span className="uppercase f-70 bold">@Filelife</span>
          </div>
          <br />
          <p>
            <br />
            My artistic name is Filelife
            <br />
            My musical genre is indie rock and folk, very influenced by British
            music and 80s. Room to Farewell was my first album, released in
            2016, followed by Plunge (second album, 2016) and Atlantic Bridges
            (third album, 2017)
          </p>
        </div>
      </div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="353.000000pt"
        height="258.000000pt"
        viewBox="0 0 353.000000 258.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,258.000000) scale(0.100000,-0.100000)"
          fill={props.fill}
          stroke="none"
        >
          <path d="M1480 2403 c-182 -20 -429 -87 -561 -153 -284 -142 -463 -352 -538 -631 -81 -297 -29 -593 146 -837 62 -86 63 -80 -36 -205 -69 -86 -136 -147 -221 -199 -34 -20 -57 -39 -52 -42 26 -16 165 -36 250 -36 106 0 271 37 375 84 154 70 181 72 276 20 148 -81 461 -179 622 -194 57 -6 160 -16 229 -23 69 -6 179 -12 245 -12 103 1 136 5 237 33 64 18 127 32 138 32 12 0 47 15 78 34 32 18 78 45 103 59 25 14 64 41 86 59 22 18 74 60 116 93 42 32 80 67 83 77 3 10 43 70 90 134 46 63 84 121 84 129 0 8 9 38 21 67 11 29 25 73 29 98 5 25 16 65 25 90 23 60 23 208 1 365 -17 116 -19 122 -71 201 -154 236 -426 448 -750 584 -55 23 -106 49 -113 58 -13 17 -50 25 -312 67 -159 25 -460 56 -514 53 -17 0 -47 -3 -66 -5z m326 -37 c198 -10 496 -73 614 -130 207 -100 475 -270 597 -378 96 -85 192 -197 226 -265 50 -96 65 -415 28 -558 -55 -211 -174 -381 -357 -516 -168 -124 -433 -216 -634 -220 -50 -1 -131 -15 -104 -18 6 0 16 -12 22 -26 6 -14 16 -25 22 -25 7 0 8 6 0 19 -15 28 -13 31 17 31 17 0 36 -10 51 -28 22 -25 24 -21 7 20 -6 15 -2 18 23 18 22 0 32 -6 37 -20 8 -26 25 -26 18 0 -7 28 20 26 40 -3 8 -12 18 -19 22 -15 4 4 3 14 -4 22 -9 11 -8 15 5 20 27 10 44 7 44 -9 0 -8 5 -15 11 -15 6 0 9 9 6 20 -4 17 0 20 24 20 22 0 29 -5 29 -19 0 -29 -121 -58 -285 -67 l-111 -7 -12 27 c-15 35 -15 36 6 37 32 2 -42 17 -92 18 l-49 1 27 -21 c33 -26 35 -54 4 -45 -13 3 -28 6 -35 6 -6 0 -17 15 -24 34 -11 31 -16 34 -68 39 -31 4 -71 9 -90 13 -31 7 -33 6 -22 -14 6 -11 11 -30 11 -42 0 -18 -4 -20 -32 -15 -18 3 -62 9 -97 15 -36 5 -68 15 -73 22 -4 7 -8 30 -8 50 0 20 -5 40 -11 43 -20 13 -21 -4 -5 -51 9 -26 14 -49 13 -51 -2 -2 -18 0 -35 3 -29 6 -33 12 -48 65 -9 33 -21 62 -25 65 -13 8 -11 -18 6 -65 13 -39 13 -41 -5 -41 -22 0 -42 28 -59 81 -7 20 -22 45 -34 55 -17 15 -19 15 -8 2 14 -18 43 -109 37 -115 -2 -2 -33 6 -70 18 -62 21 -66 24 -67 53 0 17 -7 47 -14 66 -12 32 -14 33 -14 9 -1 -14 4 -40 10 -58 14 -39 9 -45 -24 -30 -19 9 -27 21 -31 53 -10 61 -29 84 -21 24 5 -38 3 -48 -8 -48 -23 0 -36 23 -43 74 -5 35 -4 46 7 46 27 1 -15 18 -108 44 l-91 26 -129 -77 c-70 -42 -157 -89 -192 -105 -78 -35 -201 -68 -253 -68 -24 0 -37 -4 -33 -10 4 -6 -7 -10 -27 -10 l-33 1 30 21 c45 31 295 286 295 300 0 6 10 22 22 35 l22 24 -61 57 c-84 80 -168 232 -208 377 -83 306 53 691 324 921 110 92 317 205 387 209 16 1 41 9 55 18 57 37 378 80 519 70 19 -1 80 -4 136 -7z m1199 -1808 c-39 -43 -55 -56 -55 -43 0 10 84 94 89 90 2 -3 -13 -24 -34 -47z m-2024 8 c14 -30 4 -76 -16 -76 -15 0 -40 74 -30 90 11 18 35 10 46 -14z m56 8 c26 -7 38 -73 15 -82 -17 -6 -48 32 -55 65 -4 24 3 27 40 17z m-113 -26 c10 -41 6 -85 -9 -98 -20 -17 -21 -15 -28 46 -4 32 -2 55 6 63 16 16 24 14 31 -11z m181 4 c16 -11 34 -112 21 -112 -21 0 -33 16 -39 50 -3 19 -8 43 -12 53 -7 18 10 24 30 9z m-234 -63 c3 -19 8 -40 10 -47 2 -8 -6 -18 -18 -22 -19 -8 -22 -4 -33 42 -10 41 -10 52 1 59 22 14 33 5 40 -32z m-62 -26 c6 -21 11 -43 11 -49 0 -18 -31 -26 -46 -13 -26 22 -12 99 18 99 4 0 12 -17 17 -37z m2051 -20 c-56 -50 -71 -56 -77 -35 -3 6 3 12 12 12 9 0 35 16 58 35 22 19 45 35 51 35 6 0 -14 -21 -44 -47z m-2110 -17 c0 -25 -5 -35 -19 -39 -16 -4 -21 2 -27 25 -4 21 -2 33 7 39 27 17 39 9 39 -25z m-60 -25 c0 -26 -14 -41 -41 -41 -12 0 -11 27 1 51 16 30 40 24 40 -10z m2090 -16 c0 -18 -32 -29 -41 -13 -4 7 -1 17 9 24 19 14 32 9 32 -11z m-2150 -10 c0 -18 -5 -25 -20 -25 -15 0 -20 7 -20 25 0 18 5 25 20 25 15 0 20 -7 20 -25z m-60 -15 c0 -13 -7 -20 -19 -20 -22 0 -35 15 -26 30 12 19 45 11 45 -10z m2143 -17 c-13 -10 -18 -10 -25 0 -12 18 -10 25 10 29 24 5 35 -15 15 -29z m-2209 8 c8 -12 -29 -21 -88 -21 -59 0 -52 17 9 23 22 2 48 4 57 5 9 1 19 -2 22 -7z m2166 -16 c0 -15 -6 -25 -14 -25 -24 0 -30 22 -11 37 25 17 25 17 25 -12z m-40 -36 c0 -12 -55 -17 -62 -6 -12 18 -10 23 15 34 17 9 25 8 35 -5 6 -9 12 -19 12 -23z m-748 -13 c16 -23 8 -37 -19 -34 -22 2 -29 9 -31 30 -3 23 0 26 20 21 13 -4 26 -11 30 -17z m60 2 c24 -20 30 -48 11 -48 -17 0 -63 37 -63 52 0 12 34 10 52 -4z m180 -33 c9 -36 7 -38 -24 -26 -31 11 -43 48 -19 54 27 7 35 2 43 -28z" />
          <path d="M1334 425 c4 -16 12 -34 17 -40 7 -7 8 0 3 20 -3 17 -11 35 -17 40 -6 7 -7 0 -3 -20z" />
          <path d="M1721 345 c0 -5 8 -26 19 -45 16 -28 19 -31 20 -14 0 12 -9 32 -20 45 -10 13 -19 20 -19 14z" />
          <path d="M1660 323 c0 -10 5 -25 10 -33 8 -12 10 -9 10 12 0 15 -4 30 -10 33 -5 3 -10 -2 -10 -12z" />
        </g>
      </svg>
    </div>
  );
};
export default Baloon;
