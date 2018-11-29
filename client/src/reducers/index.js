import {combineReducers} from 'redux'
import games from './games'
import sessions from './sessions'

export default combineReducers({
  // your reducers will go here
  games,
  sessions
}) 