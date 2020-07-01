import React from "react";

const ThemeSwitcher = ({ toggleTheme }) => (
  <>
    <div className="toggle-container change-theme">
      <input onClick={toggleTheme} type="checkbox" id="switch" name="theme" />
      <label htmlFor="switch">Toggle</label>
    </div>
  </>
);

export default ThemeSwitcher;
