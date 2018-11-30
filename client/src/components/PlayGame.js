import React, { Component } from 'react';
import icon from '../images/icon.png'
class Hangman extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container col s16" top-margin="10px">
                <img src="http://movilcrunch.com/wp-content/uploads/2012/01/hangman.jpg"></img> 
                <h2 className="container">  Waiting...  </h2>
            </div>
            
        );
    }
}
 
export default Hangman;