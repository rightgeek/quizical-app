import React from 'react';

export default function Landing(props) {
    return (
        <section className='landing'>
            <h1>Quizzical</h1>
            <p>What do you know?</p>
            <button
                className='btn btn--large'
                onClick={() => props.playGame()}
            >
                Start quiz
            </button>
        </section>
    )
}