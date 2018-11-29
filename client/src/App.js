import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import GamesListContainer from './components/GamesListContainer';
import CreateSession from './components/CreateSession';
import PlayGame from './components/PlayGame';



class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
         <Route path="/" exact component={ CreateSession } />
         <Route path="/session" exact component={ GamesListContainer } /> 
         <Route path="/session/:id" exact component={ PlayGame } /> 


      </div>

      </Provider>
    );
  }
}

export default App;
