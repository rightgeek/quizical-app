import React from "react";
import Question from "./question";

export default function GameScreen(props) {

    //console.log(props.correctAnswers, props.batchQuestions)

    const question = props.batchQuestions.map((item, i) => {
        const answers = item.incorrect_answers

        answers.splice(Math.round(Math.random() * answers.length), 0, item.correct_answer);
        
        const showAnswers = answers.map(answer => {
            return (
                <>
                    <input type="radio" id={answer} name={`q${i}`} value={answer} />
                    <label htmlFor={answer}>{ props.decodeHtml(answer) }</label>
                </>
            )
        })

        return (
            <Question>
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
        </>
    )
}