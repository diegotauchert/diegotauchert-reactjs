import React, { Component } from "react";
import Parallax from "parallax-js";
import "./Parallax.css";
import styled from "styled-components";
import Baloon from "../svg/baloon.jsx";
import Musician from "../svg/musician.jsx";
import Developer from "../svg/developer.jsx";
import Diego from "../svg/diego.jsx";
import Logo from "../svg/logo.jsx";

const Wrapper = styled.div`
  background: ${(props) => props.theme.theme.background};
  color: ${(props) => props.theme.theme.color};

  svg {
    fill: ${(props) => props.theme.theme.fill};
  }
  #main::before {
    opacity: ${(props) => props.theme.theme.opacity};
  }
  .btn-sound img,
  .black-logo,
  .cloud {
    filter: ${(props) => props.theme.theme.filter};
    -webkit-filter: ${(props) => props.theme.theme.filter};
  }
  .btn-sound:hover::after {
    color: ${(props) => props.theme.theme.color};
  }
  .profile-button .btn {
    color: ${(props) => props.theme.theme.color2};
  }
  .diegoTauchert {
    filter: ${(props) => props.theme.theme.filter2};
    -webkit-filter: ${(props) => props.theme.theme.filter2};
  }
`;

export default class ParallaxLayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "scene unselectable",
    };
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene, {
      relativeInput: true,
      pointerEvents: true,
    });
    this.parallax.friction(0.012, 0.012);
    this.parallax.calibrate(true, true);
    this.parallax.limit(100, 10);
    this.parallax.scalar(20, 15);
    this.parallax.origin(1, 1);

    this.parallax.doReadyCallback();
  }

  componentWillUnmount() {
    this.parallax.disable();
  }

  render() {
    return (
      <Wrapper className="wrapper">
        <div id="main">
          <ul ref={(el) => (this.scene = el)} className={this.state.class}>
            <li id="layer-1" className="layer" data-depth="0.50">
              <Musician fill={this.props.fill} />
            </li>
            <li id="layer-2" className="layer" data-depth="1.00">
              <Developer fill={this.props.fill} />
            </li>
            <li id="layer-3" className="layer" data-depth="1.10">
              <Diego fill={this.props.fill} />
            </li>
            <li id="layer-4" className="layer" data-depth="1.20">
              <Baloon fill={this.props.fill} />
            </li>
            <li id="layer-5" className="layer center" data-depth="1.30">
              <Logo fill={this.props.fill} />
            </li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
