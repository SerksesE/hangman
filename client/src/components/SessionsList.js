import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadSessions } from '../actions/sessions'
import CreateSession from './CreateSession';
import JoinGame from './JoinGame';
import {Link} from 'react-router-dom'




class  SessionsList extends Component {
    componentDidMount() {
        this.props.loadSessions()
        console.log(this.state + "wewe")
      }
    render() { 
        return (  
            <div className="container">

            <h2> Welcome to the hangman! </h2>

            { this.props.sessions && this.props.sessions.map(session => 
                <div className="col s7 push-s5 card-panel horizontal container width=30%">

                <h4 key={session.id}>Session: #{session.id} </h4>
                <button className="container btn-floating btn-medium waves-effect waves-light green "><Link to= {`/sessions/${session.id}/join`}> <b className="white-text">Join </b> </Link> </button>

                <JoinGame sessions={this.props}/>
            </div>
            )}

            <hr />
            
            <CreateSession />

            </div>

        );
    }
}
 
const mapStateToProps = (state) => ({
    sessions: state.sessions
  })
  
export default connect(mapStateToProps, {loadSessions})(SessionsList)