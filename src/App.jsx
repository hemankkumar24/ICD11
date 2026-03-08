import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={ <Landing /> } />
        <Route path="/dashboard" element={  <Dashboard /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  )
}

export default App