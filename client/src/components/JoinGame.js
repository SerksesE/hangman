import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadSessions } from '../actions/sessions'
import { loadSession } from '../actions/sessions'
// import {Link} from 'react-router-dom'


class JoinGame extends Component {
    componentDidMount() {
        this.props.loadSessions()
      }

    handleChange = (e) => {
        this.setState({
         [e.target.name]: e.target.value  
        })
        
        console.log(e.target.value)
        console.log(this.props)
    }
        
    
    // handleClick = (e) => {
        
        // if(this.props.sessions[2].player1 === null){
        //     this.setState({
        //         [this.props.sessions[2].player1]: 10
                
        //     })}
        //     else {
        //         this.setState({
        //             [this.props.sessions[2].player2]: 10
                    
        //         })
        //     }
        //     console.log(this.props) 
        // e.preventDefault()
        //     console.log(this.props)
        //     this.setState({
                /* id: undefined,
                player1: undefined,
                player2: undefined,
                game1: undefined,
                game2: undefined,
                winner:'', */ 
                
    //         })
    //         console.log(this.props + "hey")
    //         this.props.loadSession(this.state)
        
    // }
    
    render() { 
        return (  
            <div>
            {/* <button onClick={this.handleClick} className="container btn-floating btn-medium waves-effect waves-light green"><Link to= {`/sessions/${session.id}`}>Join </Link> </button> */}
            <input type="number" placeholder="Input your id" onChange={this.handleChange} name="player1"></input>
 
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    sessions: state.sessions
  })

  export default connect(mapStateToProps, {loadSessions, loadSession})(JoinGame)