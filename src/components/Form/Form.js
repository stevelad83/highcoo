import React, { useContext, useEffect, useState } from 'react';
import { PoemsContext } from '../../context/PoemsContext.js';
import {
  createHaiku,
  getRandomLine,
  getSecondRandomLine,
  getThirdRandomLine,
} from '../../services/poems.js';
import './Form.css';
import { useHistory } from 'react-router-dom';
import { checkHaiku } from '../Count/Count.js';

export default function Form() {
  const history = useHistory();
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [lineThree, setLineThree] = useState('');
  const [theme, setTheme] = useState('winter');
  const [haiku, setHaiku] = useState('');
  const { setPoems } = useContext(PoemsContext);

  const handleRandomLineOne = async (e) => {
    e.preventDefault();
    const response = await getRandomLine('fiveLine');
    setLineOne(response[0].fiveLine);
  };

  const handleRandomLineTwo = async (e) => {
    e.preventDefault();
    const response = await getSecondRandomLine();
    setLineTwo(response[0].sevenLine);
  };
  const handleRandomLineThree = async (e) => {
    e.preventDefault();
    const response = await getThirdRandomLine();
    setLineThree(response[0].finalFive);
  };

  const handleCreatePoem = async (e) => {
    e.preventDefault();
    const lineOne = e.target[0].value;
    const lineTwo = e.target[1].value;
    const lineThree = e.target[2].value;

    if (checkHaiku(lineOne, lineTwo, lineThree) === false || !lineOne || !lineTwo || !lineThree) {
      setLineOne('');
      setLineTwo('');
      setLineThree('');
      return alert('Haikus must have 5/7/5 syllables!');
      //submit is working with empty inputs or single inputs  and shouldn't be
    } else
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

  const handleSelect = (theme) => {
    setTheme(theme);
  };

  return (
    <div className={`container ${theme}`}>
      <form onSubmit={handleCreatePoem}>
        <div className="cell-one">
          <label>Line one </label>
          <input type="text" value={lineOne} onChange={(e) => setLineOne(e.target.value)} />
        </div>
        <div className="cell-two">
          <label>Line two </label>
          <input type="text" value={lineTwo} onChange={(e) => setLineTwo(e.target.value)} />
        </div>
        <div className="cell-three">
          <label>Line three</label>
          <input type="text" value={lineThree} onChange={(e) => setLineThree(e.target.value)} />
        </div>
        <div className="smb">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      {/* <div className="random-buttons-div"> */}
      <div className="yo">
        <button className="random-one" value="fiveLine" onClick={handleRandomLineOne}>
          Randomize
        </button>
      </div>
      <button className="random-two" value="sevenLine" onClick={handleRandomLineTwo}>
        Randomize
      </button>
      <button className="random-three" value="finalFive" onClick={handleRandomLineThree}>
        Randomize
      </button>
      <div className="season-selector">
        <label>
          Pick a season:
          <select onChange={(e) => handleSelect(e.target.value)}>
            <option value="winter" className="winter">
              Winter
            </option>
            <option value="spring" className="spring">
              Spring
            </option>
            <option value="summer" className="summer">
              Summer
            </option>
            <option value="autumn" className="autumn">
              Autumn
            </option>
          </select>
        </label>
      </div>
    </div>
    // </div>
  );
}
