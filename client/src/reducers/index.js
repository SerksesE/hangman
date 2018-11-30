import {combineReducers} from 'redux'
import games from './games'
import sessions from './sessions'
import session from './session'

export default combineReducers({
  // your reducers will go here
  games,
  sessions,
  session
}) 