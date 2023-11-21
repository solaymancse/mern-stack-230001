import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sate } from './components/Sate'
import { Hooks } from './components/Hooks'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Register } from './components/Register'

function App() {
  

  return (
    <>
     
   
     <Routes>
      <Route path='/' element={  <Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
    </>
  )
}

export default App
