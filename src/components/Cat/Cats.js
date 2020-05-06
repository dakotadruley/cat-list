import React from 'react';
import PropTypes from 'prop-types';
import Cat from './Cat.js';

const Cats = ({ cats }) => {
  const catElements = cats.map(cat => (
    <>
      <li key={cat.url}>
        <Cat {...cat} />
      </li>
    </>
  ));

  return (
    <ul>
      {catElements}
    </ul>
  );
};

Cats.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Cats;
