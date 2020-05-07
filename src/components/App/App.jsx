import React from 'react';
import Header from '../Header/Header.js';
import CatCalling from '../../hooks/CatCalling.js';
import AppDark from './AppDark.css';
import AppLight from './AppLight.css';

export default function App() {
  const theme = useTheme();
  
  return (
    <>
      <Header />
      <CatCalling />
    </>
  );
}
  
