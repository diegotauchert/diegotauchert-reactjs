import React from "react";

const ThemeSwitcher = ({ toggleTheme }) => (
  <>
    <div className="toggle-container change-theme">
      <input onClick={toggleTheme} type="checkbox" id="switch" name="theme" />
      <label for="switch">Toggle</label>
    </div>
  </>
);

export default ThemeSwitcher;
