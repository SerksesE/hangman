import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import GamesListContainer from './components/GamesListContainer';
import CreateSession from './components/CreateSession';
import PlayGame from './components/PlayGame';
import SessionsList from './components/SessionsList';
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import SignupPage from './components/signup/SignupPage'



class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div>
        <nav>

            <div className="nav-wrapper">
              <a href="/" className="brand-logo container" ><b>Hangman</b></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/signup"><b>SignUp</b></a></li>
                
              </ul>
            </div>
            </nav>

          <Route exact path="/" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/signup" component={SignupPage} />


          <Route path="/sessions" exact component={SessionsList} />
          <Route path="/games" exact component={GamesListContainer} />
          <Route path="/sessions/:id/join" exact component={PlayGame} />

        </div>
      </Provider>
    );
  }
}

export default App;
