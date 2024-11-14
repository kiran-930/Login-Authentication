import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'



function App() {
  return (
   <>
   <Routes>
        <Route element={<Login/>} path='/' />
        <Route element={<Home/>} path='/home' />
   </Routes>
   </>
  )
}

export default App