import { useState } from 'react'
import HomePage from './components/HomePage'
import { supabase } from './client';
import './App.css'

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App;
