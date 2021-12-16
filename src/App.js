import React from 'react'

// import Dashboard from './Dashboard/Dashboard'
import Homepage from './homepage/Homepage'
import { Routes, Route } from 'react-router-dom'
import Signup from './signup/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Signup' element={< Signup/>} />
      </Routes>
    </div>    
  )
}

export default App
