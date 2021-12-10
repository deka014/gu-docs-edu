import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Test from './Test'

function Homepage() {
  return (
    <div>
      <Dashboard Test={Test}></Dashboard>
    </div>
  )
}

export default Homepage
