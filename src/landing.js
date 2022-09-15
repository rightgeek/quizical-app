import React from 'react';

export default function Landing(props) {
    return (
        <section className='landing'>
            <h1>Welcome to Quizzical!</h1>
            <p>5 trivia questions to start your days with...</p>
            <button
                className='btn btn--large'
                onClick={() => props.playGame()}
            >
                Go in
            </button>
        </section>
    )
}