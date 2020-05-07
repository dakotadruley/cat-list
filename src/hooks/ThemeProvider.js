import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggle = ({ target }) => {
    if(target.checked) setTheme('light');
    if(!target.checked) setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};

export const useLight = () => {
  const { light } = useContext(ThemeContext);
  return light;
};

export const useDark = () => {
  const { dark } = useContext(ThemeContext);
  return dark;
};

