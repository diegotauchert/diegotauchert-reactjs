import React from "react";

const ThemeSwitcher = ({ toggleTheme }) => (
  <button onClick={toggleTheme} className="change-theme">Change Theme</button>
);

export default ThemeSwitcher;