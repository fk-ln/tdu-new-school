import React from "react";

export const THEMES = {
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: '#333333',
  }
}

export const ThemeContext = React.createContext([THEMES.dark, () => { }]);
