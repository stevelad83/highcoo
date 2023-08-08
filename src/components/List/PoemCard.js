import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { deletePoem } from '../../services/poems.js';

export default function PoemCard({ poem }) {
  const user = useUser();
  console.log('poem', poem);
  console.log('user.id', user.id);
  const owner = poem.user_id;

  const handleDelete = async () => {
    await deletePoem(poem.id);
  };

  return (
    <div className="poem-card" key={poem.id}>
      <ul className="list">
        <li>{poem.fiveLine}</li>
        <li>{poem.sevenLine}</li>
        <li>{poem.finalFive}</li>
      </ul>
      {owner && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
