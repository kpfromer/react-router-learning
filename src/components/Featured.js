import React from 'react';

const Featured = ({ match }) => {

  const {topic, fname, lname} = match.params;
  const name = lname ? `${fname} ${lname}` : fname;

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;