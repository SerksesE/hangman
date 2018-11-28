import React from 'react'; 

export const GamesList = (props) => {
    if(props.games === null) return <h1> Bummer, No games at the moment!</h1>
    return (
        <ul>
            {props.games && props.games.map(game => {
            return  <li key={game.id}>Game: {game.id}</li>
            })}
        </ul>
    )
}