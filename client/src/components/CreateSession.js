import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Session extends Component {
    state = {  }

    render() {
        let sessions = [
            {
                id: 1,
                player1: null,
                player2: null,
            },
            {
                id: 2,
                player1: 2,
                player2: null,
            },
            {
                id: 3,
                player1: 4,
                player2: 6,
            },
            {
                id: 4,
                player1: null,
                player2: null,
            }
        ]
        return (  
            <div className="col s12 m7">
            <form className>
                Start a session!
                <button><Link to={'/session'}> New </Link></button>

            </form>
            { sessions.map(session => { 
                return (
                    <div>
                    <li key={session.id}>Player 1: {session.player1} </li>
                    <li key={session.id}>Player 2: {session.player2} </li>
                    <hr />
                    </div>
                )
            })}
            </div>
        );
    }
}
 
export default Session;