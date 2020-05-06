import React from 'react';
import PropTypes from 'prop-types';

const Cat = ({ url }) => (
  <section>
    <img src={url} />
  </section>
);

Cat.propTypes = {
  url: PropTypes.string.isRequired
};

export default Cat;
