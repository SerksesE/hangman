import request from 'superagent'

export const SESSIONS_FETCHED = 'SESSIONS_FETCHED'
export const SESSION_CREATED = 'SESSION_CREATED'

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


