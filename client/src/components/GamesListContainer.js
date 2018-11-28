import React from 'react'
import { loadGames } from '../actions/games'
import { connect } from 'react-redux'
import { GamesList } from './GamesList'
import GameFormContainer from './GameFormContainer';

class GamesListContainer extends React.Component {
  componentDidMount() {
    this.props.loadGames()
  }

  render() {
    return (
      <div>
        <h1>Choose your game!</h1>
        <GamesList games={this.props.games} />
        <GameFormContainer /> 

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  games: state.games
})

export default connect(mapStateToProps, {loadGames})(GamesListContainer)