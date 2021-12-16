import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { useState } from 'react'
import Test from './Test'
import { Button } from '@mui/material'
import styled from 'styled-components'

function Homepage() {
  const [semester, setSemester] = useState('')
  return (
    <div>
      <Dashboard semester={setSemester}></Dashboard>
      {/* <Navbar /> */}
      {semester && <h1>CURRENTLY YOU ARE ON {semester}</h1>}
    </div>
  )
}

export default Homepage
