import { createContext, useEffect, useState } from 'react';
import { getPoems } from '../services/poems.js';

const PoemsContext = createContext();

const PoemsProvider = ({ children }) => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const data = await getPoems();
        setPoems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchPoems();
  }, []);

  const deletePoem = async (poemId) => {
    try {
      await deletePoem({ poemId });

      // After successful deletion, update the poems list in the context
      setPoems((prevPoems) => {
        return prevPoems.filter((poem) => poem.id !== poemId);
      });
    } catch (error) {
      console.error('Error deleting poem:', error.message);
    }
  };

  return (
    <PoemsContext.Provider value={{ poems, setPoems, deletePoem }}>
      {children}
    </PoemsContext.Provider>
  );
};

export { PoemsContext, PoemsProvider };
