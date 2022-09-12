import { createContext, useState, useEffect } from 'react'

export const SettingsContext = createContext();

export function SettingsContextProvider({ children }) {
    const [gameOn, setGameOn] = useState(false)
    const [batchQuestions, setBatchQuestions] = useState(null)
    const [answers, setAnswers] = useState([])

    function playGame() {
        batchQuestions && setGameOn(true);
    }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(response => response.json())
        .then(data => {
            setBatchQuestions(data.results)
        })
    }, [])

    const settings = {
        startGame: gameOn,
        playGame,
        batchQuestions
    }
    
    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )
}