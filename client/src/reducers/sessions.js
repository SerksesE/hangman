import { SESSIONS_FETCHED, SESSION_CREATED, SESSION_UPDATED } from "../actions/sessions";


const sessions = (state = null, action = {}) => {
    switch(action.type){
        case SESSIONS_FETCHED:
        return action.sessions

        case SESSION_CREATED:
        return [...state, 
                action.session]

        case SESSION_UPDATED:
        return [...state,
                action.session]
            
    
    default:
        return state
    }
}

export default sessions