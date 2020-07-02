import React, { Component } from "react";
import Parallax from "parallax-js";
import "./Parallax.css";
import "./SlideAnimation.css";
import styled from "styled-components";
import Baloon from "../svg/baloon.jsx";
import Musician from "../svg/musician.jsx";
import Developer from "../svg/developer.jsx";
import Diego from "../svg/diego.jsx";
import Logo from "../svg/logo.jsx";
import Sprite from "../svg/sprite.jsx";

import Video from "../svg/video.jsx";
import Portfolio from "../svg/portfolio.jsx";
import Stack from "../svg/stack.jsx";

import $ from "jquery";

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
  .cloud,
  .invert {
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
  .text-white {
    color: ${(props) => props.theme.theme.color3};
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

    $(".nav-musician").click(function () {
      $("#main").removeClass("developer home");
      $("#main").toggleClass("musician");
    });
    $(".nav-developer").click(function () {
      $("#main").removeClass("musician home");
      $("#main").toggleClass("developer");
    });
    $(".back-home button, .black-logo").click(function () {
      $("#main").addClass("home");
      $("#main").removeClass("musician");
      $("#main").removeClass("developer");
    });

    $(".dialog-body .carousel").first().addClass("active").fadeIn("slow");

    setInterval(function () {
      if ($(".dialog-body .carousel.active").next().length === 0) {
        $(".dialog-body .carousel.active").removeClass("active").hide();
        $(".dialog-body .carousel").first().fadeIn("slow").addClass("active");
      } else {
        $(".dialog-body .carousel.active")
          .removeClass("active")
          .hide()
          .next()
          .fadeIn("slow")
          .addClass("active");
      }
    }, 10000);

    $(".carousel-stack img").first().addClass("active").fadeIn("slow");

    setInterval(function () {
      if ($(".carousel-stack img.active").next().length === 0) {
        $(".carousel-stack img.active").removeClass("active").hide();
        $(".carousel-stack img").first().fadeIn("slow").addClass("active");
      } else {
        $(".carousel-stack img.active")
          .removeClass("active")
          .hide()
          .next()
          .fadeIn("slow")
          .addClass("active");
      }
    }, 2000);

    $(".jobs .card img").first().addClass("active").fadeIn("slow");
    $(".jobs .card-body").first().addClass("active").fadeIn("slow");

    function JobsCarousel(direction = "next") {
      let img;
      let btn;

      if (direction === "next") {
        img = $(".jobs .card img.active").next();
        btn = ".nav-job.prev";
      } else if (direction === "prev") {
        img = $(".jobs .card img.active").prev();
        btn = ".nav-job.next";
      }

      if (img.length === 0) {
        $(".jobs .card img.active").removeClass("active").hide();
        $(".jobs .card img").first().fadeIn("slow").addClass("active");

        $(".jobs .card-body.active").removeClass("active").hide();
        $(".jobs .card-body").first().fadeIn("slow").addClass("active");

        $(btn).animate({ height: "40px" }, 200, "linear", function () {
          $(this).css("height", "60px");
        });
      } else {
        $(".jobs .card img.active")
          .removeClass("active")
          .hide()
          .next()
          .fadeIn("slow")
          .addClass("active");

        $(".jobs .card-body.active")
          .removeClass("active")
          .hide()
          .next()
          .fadeIn("slow")
          .addClass("active");

        $(".nav-job." + direction).animate(
          { height: "40px" },
          200,
          "linear",
          function () {
            $(this).css("height", "60px");
          }
        );
      }
    }

    setInterval(function () {
      JobsCarousel("next");
    }, 4000);

    $(".nav-job.next").click(function () {
      JobsCarousel("next");
    });

    $(".nav-job.prev").click(function () {
      JobsCarousel("prev");
    });
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
              <Video fill={this.props.fill} />
            </li>
            <li id="layer-2" className="layer" data-depth="1.00">
              <Developer fill={this.props.fill} />
              <Stack fill={this.props.fill} />
              <Portfolio fill={this.props.fill} />
            </li>
            <li id="layer-3" className="layer" data-depth="1.10">
              <Diego fill={this.props.fill} />
            </li>
            <li id="layer-4" className="layer" data-depth="1.20">
              <Baloon fill={this.props.fill} />
            </li>
            <li id="layer-5" className="layer" data-depth="1.30">
              <Logo fill={this.props.fill} />
            </li>
            <li id="layer-6" className="layer center" data-depth="1.05">
              <Sprite fill={this.props.fill} />
            </li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}
