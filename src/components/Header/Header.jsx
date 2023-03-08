import { useUser } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      console.log('user', user);
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
