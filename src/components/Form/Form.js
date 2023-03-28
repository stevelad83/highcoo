import React, { useContext, useState } from 'react';
import { PoemsContext } from '../../context/PoemsContext.js';
import { createHaiku, getRandomLine } from '../../services/poems.js';
import './Form.css';

import { useHistory } from 'react-router-dom';
import { checkHaiku } from '../Count/Count.js';

export default function Form() {
  const history = useHistory();
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [lineThree, setLineThree] = useState('');

  const [haiku, setHaiku] = useState('');

  const { setPoems } = useContext(PoemsContext);

  const handleCreatePoem = async (e) => {
    e.preventDefault();
    const lineOne = e.target[0].value;
    const lineTwo = e.target[1].value;
    const lineThree = e.target[2].value;
    // console.log(checkLine(lineOne));
    // console.log(checkLine(lineTwo));
    // console.log(checkLine(lineThree));
    if (checkHaiku(lineOne, lineTwo, lineThree) === false) {
      setLineOne('');
      setLineTwo('');
      setLineThree('');
      return alert('Haikus must have 5/7/5 syllables!');
    }

    try {
      const input = await createHaiku(lineOne, lineTwo, lineThree);
      setHaiku(input);
      setPoems((prev) => [...prev, input]);
      setHaiku('');
      history.replace('/');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreatePoem}>
        <label>Line one</label>
        <input type="text" value={lineOne} onChange={(e) => setLineOne(e.target.value)} />
        <label>Line two</label>
        <input type="text" value={lineTwo} onChange={(e) => setLineTwo(e.target.value)} />
        <label>Line three</label>
        <input type="text" value={lineThree} onChange={(e) => setLineThree(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={getRandomLine}>Randomize</button>
    </div>
  );
}
