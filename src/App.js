import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import { useUser } from './context/UserContext.js';
import useLocalStorage from 'use-local-storage';

function App() {
  const { user } = useUser();
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'Dark' : 'light';
  //   setTheme(newTheme);
  // };
  return (
    <div className="App">
      <Header />
      {/* <button onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'light'} Theme </button> */}
      <Switch>
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="*">
          <>
            {user && <Redirect to="/home" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
