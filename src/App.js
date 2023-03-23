import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Form from './components/Form.js';
import Header from './components/Header/Header';
import Home from './components/Home.jsx';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
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
