import { createContext, useEffect, useState } from 'react';
import { getPoems } from '../services/poems.js';
import { useUser } from './UserContext.js';

const PoemsContext = createContext();

const PoemsProvider = ({ children }) => {
  const [poems, setPoems] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const data = await getPoems();
        // console.log(data);
        setPoems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchPoems();
  }, [user]); //is this dependency array correct?
  return <PoemsContext.Provider value={{ poems, setPoems }}>{children}</PoemsContext.Provider>;
};

export { PoemsContext, PoemsProvider };
