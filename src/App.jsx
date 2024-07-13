// import React from 'react'

import './App.css';

import Demo from './components/Demo';
import Hero from './components/Hero';

const App = () => {
  return (
    <main className="main">
      <div className="gradient">
        
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App