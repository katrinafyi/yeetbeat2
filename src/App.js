import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.scss';

import MainPage from './MainPage';
import JoinPage from './JoinPage';
import LobbyPage from './LobbyPage';
import { HOME_URL, JOIN_URL } from './logic/URLs';

function App() {
  return (
    <div className="section">
      <div className="columns is-centered is-mobile">
        <div className="column main-col">
          <div className="box">
            <Router>
              <Link to={HOME_URL}><h1 className="is-size-3 has-text-weight-bold">Yeetbeat 2</h1></Link>

              <Switch>
                <Route path={HOME_URL} exact component={MainPage}></Route>
                <Route path={JOIN_URL} exact component={JoinPage}></Route>
                <Route path={JOIN_URL+":code"}
                  render={(props) => <LobbyPage code={props.match.params.code}></LobbyPage>}></Route>
              </Switch>
            </Router>
            
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;
