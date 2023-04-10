import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);

      location.assign('/auth');
      // setUser(null);
      // history.pushState('/auth/sign-in', '');
      //why does redirect on sign out not work from form component?
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <header>
      <h2>Hi-Coo</h2>
      {user && (
        <>
          <div className="welcome">Welcome {user.email}</div>{' '}
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </header>
  );
}
