import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import GamesListContainer from './components/GamesListContainer';
import CreateSession from './components/CreateSession';
import PlayGame from './components/PlayGame';
import SessionsList from './components/SessionsList';



class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
         <Route path="/sessions" exact component={SessionsList } />
         <Route path="/games" exact component={ GamesListContainer } /> 
         <Route path="/sessions/:id/join" exact component={ PlayGame } /> 
         


      </div>

      </Provider>
    );
  }
}

export default App;
