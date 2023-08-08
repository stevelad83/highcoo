import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PoemsContext } from '../../context/PoemsContext.js';
import './PoemsList.css';
import Wave from '../Wave/Wave.js';
import { useUser } from '../../context/UserContext.js';
import PoemCard from './PoemCard.js';

export default function PoemsList({ user_id, id }) {
  const { poems, deletePoem } = useContext(PoemsContext);
  const { user } = useUser();

  const handleDelete = async () => {
    try {
      // Call the deletePoem function from the context with the poem's id
      await deletePoem(id);
      console.log('Poem deleted successfully!');
    } catch (error) {
      console.error('Error deleting poem:', error.message);
    }
  };

  return (
    <>
      <div className="poems-list">
        {poems.map((poem) => {
          console.log('user.id', user.id);

          return <PoemCard key={poem.id} poem={poem} />;
        })}
      </div>
      <Wave />
    </>
  );
}
