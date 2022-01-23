import React from 'react'
import './App.css'

// import Dashboard from './Dashboard/Dashboard'
import Homepage from './homepage/Homepage'

import { Routes, Route } from 'react-router-dom'
import Signup from './signup/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
