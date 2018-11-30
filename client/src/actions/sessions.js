import request from 'superagent'

export const SESSIONS_FETCHED = 'SESSIONS_FETCHED'
export const SESSION_CREATED = 'SESSION_CREATED'
export const SESSION_UPDATED = 'SESSION_UPDATED'
export const SESSION_FETCHED = 'SESSION_FETCHED'

const baseUrl = 'http://localhost:4001'

const sessionsFetched = sessions => ({
    type: SESSIONS_FETCHED,
    sessions
})

export const loadSessions = () => (dispatch, getState) => {
    if(getState().sessions) return 
    request(`${baseUrl}/sessions`)
    .then(response => {
        dispatch(sessionsFetched(response.body))
    })
    .catch(console.error)
}



const sessionFetched = session => ({
    type: SESSION_FETCHED,
    session
})
export const loadSession = (sessionId) => dispatch => {
    request
    .get(`${baseUrl}/sessions/${sessionId}`)
    .then(response => dispatch(sessionFetched(response.body)))
    .catch(console.error)
} 







const sessionCreated = session => ({
    type: SESSION_CREATED,
    session
})

export const createSession = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/sessions`)
    .send(data)
    .then(response => {
      dispatch(sessionCreated(response.body))
    })
    .catch(console.error)
}


const sessionUpdated = session => ({
    type: SESSION_UPDATED,
    session
})

export const updateSession = (sessionId, playerId) => (dispatch) => {
    request
    .patch(`${baseUrl}/sessions/${sessionId}/join`)
    const session = {}
    if (session.player1 === null) {
        session.player1 = playerId
        return session.save()
      } else{
        session.player2 = playerId
        return session.save()

      
    .send(playerId)
    .then(response => dispatch(sessionUpdated(response.body)))
    .catch(console.error)
    }
}
