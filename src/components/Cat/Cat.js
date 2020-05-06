import React from 'react';
import PropTypes from 'prop-types';

const Cat = ({ url }) => (
  <section>
    <a href={url}>Cat</a>
  </section>
);

Cat.propTypes = {
  url: PropTypes.string.isRequired
};

export default Cat;
