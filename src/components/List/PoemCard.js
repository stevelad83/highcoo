import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { deletePoem } from '../../services/poems.js';

export default function PoemCard({ poem, onDelete }) {
  const user = useUser();
  console.log('user', user);
  // console.log('poem', poem);
  // console.log('user.id', user.id);
  const owner = user.user.id === poem.user_id;

  const handleDelete = async () => {
    await deletePoem(poem.id);
    onDelete(poem.id);
  };

  return (
    <div key={poem.id}>
      <ul className="list">
        <li>{poem.fiveLine}</li>
        <li>{poem.sevenLine}</li>
        <li>{poem.finalFive}</li>
      </ul>
      {owner && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
