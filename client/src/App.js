import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import GamesListContainer from './components/GamesListContainer';



class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
         <Route path="/games" exact component={ GamesListContainer } />

      </div>

      </Provider>
    );
  }
}

export default App;
