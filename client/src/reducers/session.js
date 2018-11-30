import {SESSION_FETCHED} from '../actions/sessions'//- {} because it is not export default

export default (state = null, action = {}) => {
    switch(action.type){
        case SESSION_FETCHED:
            return action.event
        default:
            return state
    }
}