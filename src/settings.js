import { createContext, useState, useEffect } from 'react'

export const SettingsContext = createContext();

export function SettingsContextProvider({ children }) {
    const [gameOn, setGameOn] = useState(false)
    const [batchQuestions, setBatchQuestions] = useState(null)
    const [batchAnswers, setBatchAnswers] = useState(null)
    const [correctAnswers, setCorrectAnswers] = useState(null)
    const [selectedAnswers, setSelectedAnswers] = useState([0,1,2,3,4])
    const [revealAnswers, setRevealAnswers] = useState(false)
    const [score, setScore] = useState(0)
    const [restart, setRestart] = useState(false)

    useEffect(() => {
        console.log('questions fetched!')
        // fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then(response => response.json())
        .then(data => {
            setBatchQuestions(data.results)
            setCorrectAnswers(data.results.map(item => item.correct_answer))
            setBatchAnswers(prevBatchAnswers => {
                const ansArray = data.results.map(item => {
                    const answers = item.incorrect_answers.filter(ans => ans !== item.correct_answer)
                    answers.splice(Math.round(Math.random() * answers.length), 0, item.correct_answer)
                    return answers
                })

                return ansArray
            })
        })
        .catch((err) => console.log("err", err))
        setRestart(false)
    }, [restart])

    useEffect(() => {
        if (batchAnswers) {
            const markers = correctAnswers.filter((item, i) => item === selectedAnswers[i])
            setScore(markers.length)
        }
    }, [batchAnswers, correctAnswers, selectedAnswers])

    function playGame() {
        console.log("Play!");
        batchQuestions && setGameOn(true);
    }

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function handleAnswers(event) {
        setSelectedAnswers(prevAnswers => {
            return {
                ...prevAnswers,
                [Number(event.target.name)]: event.target.value
            }
        })
    }

    function checkAnswers() {
        setRevealAnswers(true)
    }

    function restartGame() {
        setRestart(true)
        setRevealAnswers(false)
        // setGameOn(false)
    }

    const settings = {
        startGame: gameOn,
        playGame,
        batchQuestions,
        batchAnswers,
        correctAnswers,
        decodeHtml,
        checkAnswers,
        handleAnswers,
        revealAnswers,
        score,
        restartGame
    }
    
    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )
}