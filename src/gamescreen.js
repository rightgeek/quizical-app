import React from "react";
import Question from "./question";

export default function GameScreen(props) {
    const question = props.batchQuestions.map((item, i) => {        
        const showAnswers = props.batchAnswers[i].map((answer, ii) => {
            let buttonStatus = ""
            if (props.revealAnswers) {
                buttonStatus = answer === props.correctAnswers[i] ? "correct" : "wrong"
            }
            return (
                <fieldset key={ii} className={buttonStatus}>
                    <input disabled={props.revealAnswers} checked={props.selectedAnswers[i] === answer} type="radio" id={props.decodeHtml(answer).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')} name={i} value={answer} onChange={props.handleAnswers} />
                    <label htmlFor={props.decodeHtml(answer).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')}>{ props.decodeHtml(answer) }</label>
                </fieldset>
            )
        })

        return (
            <Question key={i}>
                <h6>{ props.decodeHtml(item.question) }</h6>
                <div className="answers">
                    {showAnswers}
                </div>
            </Question>
        )
    })

    return (
        <>
            <div className="gamescreen">
                { question }
            </div>
            {!props.revealAnswers && <button
                className='btn'
                onClick={() => props.checkAnswers()}
            >
                Check answers
            </button>}
            {props.revealAnswers && <div className="scoresReveal"><span>You scored { props.score }/5 correct answers</span><button
                className='btn'
                onClick={() => props.restartGame()}
            >
                Play again
            </button></div>}
        </>
    )
}