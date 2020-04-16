import React from 'react'
// import './App.css'
import Dashboard from './components/products/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <Dashboard />
      </Router>
    </>
  )
}

export default App
