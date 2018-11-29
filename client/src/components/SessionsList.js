import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadSessions } from '../actions/sessions'
import CreateSession from './CreateSession';



class  SessionsList extends Component {
    componentDidMount() {
        this.props.loadSessions()
      }
    render() { 
        return (  
            <div className="col s12 m7 container">
            <h2> Welcome to hangman! </h2>

            { this.props.sessions && this.props.sessions.map(session => 
                <h4 key={session.id}>Session: #{session.id} 
                <button className="btn-floating btn-medium waves-effect waves-light green">Join</button></h4>
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