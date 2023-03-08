import React, { useContext } from 'react';
import { PoemsContext } from '../context/PoemsContext.js';
import './PoemsList.css';

export default function PoemsList() {
  const { poems } = useContext(PoemsContext);
  // console.log('poems', poems);
  return (
    <div>
      {poems.map((poem) => (
        <a key={poem.id}>
          <ul>
            <li>{poem.fiveLine}</li>
            <li>{poem.sevenLine}</li>
            <li>{poem.finalFive}</li>
          </ul>
        </a>
      ))}
    </div>
  );
}
