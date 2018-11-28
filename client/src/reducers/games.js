import { GAMES_FETCHED, GAME_CREATED } from "../actions/games";


const games = (state = null, action = {}) => {
    switch(action.type){
        case GAMES_FETCHED:
        return action.games.games

        case GAME_CREATED:
        return [...state, 
                action.game]
            
    
    default:
        return state
    }
}

export default games