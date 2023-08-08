// import { createContext, useEffect, useState } from 'react';
// import { deletePoem, getPoems } from '../services/poems.js';
// import { useUser } from './UserContext.js';

// const PoemsContext = createContext();

// const PoemsProvider = ({ children }) => {
//   const [poems, setPoems] = useState([]);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchPoems = async () => {
//       try {
//         const data = await getPoems();
//         // console.log(data);
//         setPoems(data);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     fetchPoems();
//   }, [user]); //is this dependency array correct?

//   const deletePoem = async (poemId) => {
//     try {
//       await deletePoem({ poemId });
//       console.log('Poem deleted successfully!');
//       // After successful deletion, update the poems list in the context
//       setPoems((prevPoems) => prevPoems.filter((poem) => poem.id !== poemId));
//     } catch (error) {
//       console.error('Error deleting poem:', error.message);
//     }
//   };

//   return <PoemsContext.Provider value={{ poems, setPoems }}>{children}</PoemsContext.Provider>;
// };

import { createContext, useEffect, useState } from 'react';
import { deletePoem, getPoems } from '../services/poems.js';

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
      console.log('Poem deleted successfully!');
      setPoems((prevPoems) => prevPoems.filter((poem) => poem.id !== poemId));
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
