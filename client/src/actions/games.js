import request from 'superagent'

export const GAMES_FETCHED = 'GAMES_FETCHED'
export const GAME_CREATED = 'GAME_CREATED'

const baseUrl = 'http://localhost:4001'

const gamesFetched = games => ({
    type: GAMES_FETCHED,
    games
})

export const loadGames = () => (dispatch, getState) => {
    if(getState().games) return 
    request(`${baseUrl}/games`)
    .then(response => {
        dispatch(gamesFetched(response.body))
    })
    .catch(console.error)
}

const gameCreated = game => ({
    type: GAME_CREATED,
    game
})

export const createGame = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/games`)
    .send(data)
    .then(response => {
      dispatch(gameCreated(response.body))
    })
    .catch(console.error)
}


