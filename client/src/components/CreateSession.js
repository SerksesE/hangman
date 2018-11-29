import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { createSession } from '../actions/sessions'
import { connect } from 'react-redux'




class CreateSession extends Component {
    state = {
        /* id: undefined,
        player1: undefined,
        player2: undefined,
        game1: undefined,
        game2: undefined,
        winner:'',  */
    }
      
        handleClick = (e) => {
            e.preventDefault()
            console.log(this.state)
            this.setState({
                /* id: undefined,
                player1: undefined,
                player2: undefined,
                game1: undefined,
                game2: undefined,
                winner:'', */ 
                
            })
            console.log(this.state + "hey")
            this.props.createSession(this.state)
            
        }
        render() {
 
        return (  
            <div className="col s12 m7 container">
            <form >
                <button onClick={this.handleClick}><h4><a href="/sessions"> Start new session! </a></h4></button>

            </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sessions: state.sessions
  })
  
export default connect(mapStateToProps,{createSession})(CreateSession)
 
 