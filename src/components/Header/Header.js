import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ toggle, value }) => (
  <>
    <section>
      <h1>Cats for Dayzz</h1>
    </section>
    <aside className={styles.Header}>
      <input id="toggle" type="checkbox" checked={value} onChange={toggle} />
      <label htmlFor="toggle"></label>
    </aside>
  </>
);

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default Header; 


