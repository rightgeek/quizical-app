import React from "react";
import Question from "./question";

export default function GameScreen(props) {

    console.log(props.correctAnswers, props.batchQuestions)

    const question = props.batchQuestions.map((item, i) => {

        const Answers = item.incorrect_answers.filter(ans => ans !== item.correct_answer)
        Answers.splice(Math.round(Math.random() * Answers.length), 0, item.correct_answer)
        
        const showAnswers = Answers.map((answer, ii) => {
            return (
                <fieldset key={ii}>
                    <input type="radio" id={answer} name={`q${i}`} value={answer} />
                    <label htmlFor={answer}>{ props.decodeHtml(answer) }</label>
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
            <button
                className='btn'
                onClick={() => props.checkAnswers()}
            >
                Check answers
            </button>
        </>
    )
}