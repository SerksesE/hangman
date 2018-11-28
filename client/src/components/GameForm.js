
import React from 'react';


const GameForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label> Your word:
                    <input type="text" name="word" onChange={props.onChange} values={props.values.word} ></input>
                    <button type="submit">Submit</button>
                </label>
            </form>

        </div>
    )
}

export default GameForm