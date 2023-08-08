import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import { useUser } from './context/UserContext.js';
import { PoemsProvider } from './context/PoemsContext.js';

function App() {
  const { user } = useUser();

  return (
    <PoemsProvider>
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
    </PoemsProvider>
  );
}

export default App;
