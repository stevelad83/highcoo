import React, { useContext, useState } from 'react';
import { PoemsContext } from '../context/PoemsContext.js';
import { createHaiku } from '../services/poems.js';

export default function Form() {
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [lineThree, setLineThree] = useState('');

  const [haiku, setHaiku] = useState('');

  const { setPoems } = useContext(PoemsContext);

  const handleCreatePoem = async () => {
    try {
      const input = await createHaiku(lineOne, lineTwo, lineThree);
      console.log('input', input);
      setHaiku(input);
      setPoems((prev) => [...prev, input]);
      setHaiku('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      <form>
        <label>Line one</label>
        <input type="text" value={lineOne} onChange={(e) => setLineOne(e.target.value)} />
        <label>Line two</label>
        <input type="text" value={lineTwo} onChange={(e) => setLineTwo(e.target.value)} />
        <label>Line three</label>
        <input type="text" value={lineThree} onChange={(e) => setLineThree(e.target.value)} />
        <button type="submit" onClick={handleCreatePoem}>
          Submit
        </button>
      </form>
    </div>
  );
}
