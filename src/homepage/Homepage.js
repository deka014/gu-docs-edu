import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Test from './Test'

function Homepage() {
  return (
    <div>
      <Dashboard Test={Test}></Dashboard>
      <h1>will this work</h1>
    </div>
  )
}

export default Homepage
