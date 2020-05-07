import React from 'react';
import Header from '../Header/Header.js';
import CatCalling from '../../hooks/CatCalling.js';
import ThemeProvider from '../../hooks/ThemeProvider.js';


export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <CatCalling />
    </ThemeProvider>
  );
}
  
