import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import ParallaxLayers from "./ParallaxLayers";
import ThemeSwitcher from "./ThemeSwitcher";

import * as themes from "../styles/";
import ThemeContext from "../styles/context";

export default class ParallaxComponent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light
    };
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <ParallaxLayers />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
    )
  }
}
