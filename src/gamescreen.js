import React from "react";
import Question from "./question";

export default function GameScreen(props) {

    console.log(props.batchQuestions)

    return (
        <>
            <div className="gamescreen">
                <Question>
                    <h6>How would one say goodbye in Spanish?</h6>
                    <div className="answers">
                        <input type="radio" id="adios" name="q1" value="adios" />
                        <label for="adios">Adios</label>
                        <input type="radio" id="hola" name="q1" value="hola" />
                        <label for="hola">Hola</label>
                        <input type="radio" id="au revoir" name="q1" value="au revoir" />
                        <label for="au revoir">Au Revoir</label>
                        <input type="radio" id="salir" name="q1" value="salir" />
                        <label for="salir">Salir</label>
                    </div>
                </Question>
            </div>
        </>
    )
}