import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PoemsContext } from '../../context/PoemsContext.js';
import './PoemsList.css';
import Wave from '../Wave/Wave.js';

export default function PoemsList() {
  const { poems } = useContext(PoemsContext);

  return (
    <>
      <div className="poems-list">
        {poems.map((poem) => (
          <a key={poem.id}>
            <ul className="list">
              <li>{poem.fiveLine}</li>
              <li>{poem.sevenLine}</li>
              <li>{poem.finalFive}</li>
            </ul>
          </a>
        ))}
      </div>
      <Link to="/form" className="write-haiku">
        Write a Haiku
      </Link>
      <Wave />
    </>
  );
}
