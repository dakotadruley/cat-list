import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { useTheme, useToggle } from '../../hooks/ThemeProvider';

const Header = () => {
  const toggle = useToggle();
  const theme = useTheme();

  return (
    <>
      <section>
        <h1>Cats for Dayzz</h1>
      </section>
      <aside className={styles.Header}>
        <input id="toggle" type="checkbox" checked={theme === 'dark'} onChange={toggle} />
        <label htmlFor="toggle"></label>
      </aside>
    </>
  
  );
};

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  // value: PropTypes.bool.isRequired
};

export default Header; 


