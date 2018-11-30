
import React from 'react';
import {Link} from 'react-router-dom'



const GameForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label> Your word:
                    <input type="text" name="word" onChange={props.onChange} values={props.values.word} ></input>
                    <button type="submit">Submit</button>
                    <hr />
                </label>
            </form>
                    <div>
                    <button type="submit"><Link to={'/game/:id'}></Link>
                        Join</button>

                    </div>

        </div>
    )
}

export default GameForm