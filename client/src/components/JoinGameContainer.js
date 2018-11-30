import React, { Component } from 'react';

class SessionDetails extends Component {
    state = {  }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.loadEvent(Number(this.props.match.params.id))
      }
    render() { 
        return (
            <div>
                Loading sessions...
            </div>
          );
    }
}
 
export default SessionDetails;