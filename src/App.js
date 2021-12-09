import React from 'react'

import Dashboard from './Dashboard/Dashboard'
import Homepage from './homepage/Homepage'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/navbar' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
