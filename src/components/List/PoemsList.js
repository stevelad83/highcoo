import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PoemsContext } from '../../context/PoemsContext.js';
import './PoemsList.css';
import Wave from '../Wave/Wave.js';
import PoemCard from './PoemCard.js';

export default function PoemsList() {
  const { poems, setPoems, deletePoem } = useContext(PoemsContext);

  const handlePoemDelete = (deletePoemId) => {
    setPoems((prevPoems) => prevPoems.filter((poem) => poem.id !== deletePoemId));
  };

  return (
    <>
      <div className="poems-list">
        {poems.map((poem) => {
          return <PoemCard key={poem.id} poem={poem} onDelete={handlePoemDelete} />;
        })}
      </div>
      <Link to="/form" className="write-haiku">
        Write a haiku
      </Link>
      <Wave />
    </>
  );
}
