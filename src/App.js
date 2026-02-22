import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes className='container'>
          <Route exact path='/' element={<Home />}/>          
        </Routes>
      
      </BrowserRouter>
  )
}

export default App