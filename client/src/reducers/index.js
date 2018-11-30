import {combineReducers} from 'redux'
import games from './games'
import sessions from './sessions'
import session from './session'
import users from './users'
import login from './login'
import signup from './signup'
import currentUser from './currentUser'


export default combineReducers({
  // your reducers will go here
  games,
  sessions,
  session,
  signup,
  users,
  login,
  currentUser
}) 