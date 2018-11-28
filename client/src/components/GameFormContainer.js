import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createGame} from '../actions/games'
import GameForm from './GameForm'


class GameFormContainer extends Component {
    state = {  
        word: ''
    }
    
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value      

        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            word: ''
        })
        this.props.createGame(this.state) 
        // console.log(h)
        
    }

    


    render() { 
        return (  
            <GameForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit} 
                values ={this.state}/>
        );
    }
}
 
export default connect(null, {createGame})(GameFormContainer)