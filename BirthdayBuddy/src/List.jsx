import React, {useState} from 'react';
import Person from './Person';
import data from './data';

const List = ({people}) => {
  return (
    <section>
      {people.map (person => {
        return (
          <div key={person.id}>
            <Person key={person.id} {...person} />

          </div>
        );
      })}
    </section>
  );
};

export default List;
