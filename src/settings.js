import { createContext, useState, useEffect } from 'react'

export const SettingsContext = createContext();

export function SettingsContextProvider({ children }) {
    const [gameOn, setGameOn] = useState(false)
    const [batchQuestions, setBatchQuestions] = useState(null)
    const [correctAnswers, setCorrectAnswers] = useState(null)

    function playGame() {
        batchQuestions && setGameOn(true);
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(data => {
            setBatchQuestions(data.results)
            setCorrectAnswers(data.results.map(item => item.correct_answer))
        })
    }, [])

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function checkAnswers() {

    }

    const settings = {
        startGame: gameOn,
        playGame,
        batchQuestions,
        correctAnswers,
        decodeHtml
    }
    
    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )
}