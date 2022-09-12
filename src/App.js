import React from 'react'
import Settings from './settings';
import topBack from './top-background.png'
import bottomBack from './bottom-background.png'
import './App.css';
import Landing from './landing';

export default function App() {
  console.log(Settings, 'haha');
  return (
    <div className="App">
      <img src={bottomBack} className="background bottom-background" alt="background" />
      <img src={topBack} className="background top-background" alt="background" />
      <Landing />
    </div>
  );
}