import React from 'react';
import PropTypes from 'prop-types';
import Cat from './Cat.js';

const Cats = ({ cats }) => {
  const catElements = cats.map(cat => (
    <>
      <li key={`${Math.random(1000)} + ${cat}`}>
        <Cat url={cat} />
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
