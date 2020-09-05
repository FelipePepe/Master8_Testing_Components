import * as React from 'react';
import { getNameCollection } from './name-api';
import { Link } from 'react-router-dom';

export const NameCollection: React.FunctionComponent = () => {
  const [nameCollection, setNameCollection] = React.useState([]);

  React.useEffect(() => {
    getNameCollection().then((names) => {
      setNameCollection(names);
    });
  }, []);

  return (
    <ul>
      {nameCollection.map((name) => (
        <li key={name}>
          <Link to={`/users/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
