import React, { useState, useEffect } from 'react';
import Cats from '../components/Cat/Cats.js';
import { catCall } from '../services/catCall.js';

const CatCalling = () => {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    catCall()
      .then(cats => setCats(cats));
  }, []);

  return (
    <>
      <Cats cats={cats} />
    </>
  );
};

export default CatCalling;
