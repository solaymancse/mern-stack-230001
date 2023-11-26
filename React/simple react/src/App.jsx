import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sate } from './components/Sate'
import { Hooks } from './components/hooks/Hooks'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Register } from './components/Register'
import { Katar } from './components/Props/Katar'
import { Alu } from './components/Props/Alu'
import { Rosun } from './components/Props/Rosun'
import { Begun } from './components/Props/Begun'
import { StateMangement } from './components/State/StateMangement'
import { Pet } from './components/map/Pet'
import { Ternary } from './components/ES6/Ternary'
import { Destructing } from './components/ES6/Destructing'

function App() {
  

  return (
    <>
     
   
     <Routes>
      <Route path='/' element={  <Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/katar" element={<Katar/>}/>
      <Route path="/alu" element={<Alu/>}/>
      <Route path="/rosun" element={<Rosun/>}/>
      <Route path="/begun" element={<Begun/>}/>
      <Route path="/state" element={<StateMangement/>}/>
      <Route path="/pet" element={<Pet/>}/>
      <Route path="/ternary" element={<Ternary/>}/>
      <Route path="/destructure" element={<Destructing/>}/>
     </Routes>
    </>
  )
}

export default App
