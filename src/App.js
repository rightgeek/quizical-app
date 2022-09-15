import React, { useContext} from 'react'
import { SettingsContext } from './settings';
import './App.css';
import Landing from './landing';
import GameScreen from './gamescreen';
import Background from './background';

export default function App() {
  const {
    startGame,
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
  } = useContext(SettingsContext)

  return (
    <div className="App">
      <Background shrink={startGame} />
      {!startGame && <Landing playGame={playGame} />}
      {startGame && <GameScreen correctAnswers={correctAnswers} revealAnswers={revealAnswers} restartGame={restartGame} score={score} batchAnswers={batchAnswers} handleAnswers={handleAnswers} checkAnswers={checkAnswers} decodeHtml={decodeHtml} batchQuestions={batchQuestions} />}
    </div>
  );
}