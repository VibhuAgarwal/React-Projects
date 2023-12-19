import React from 'react';

const Person = ({image, name, age}) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <h4>{name}</h4>
      <p>{age} years</p>
    </article>
  );
};

export default Person;
