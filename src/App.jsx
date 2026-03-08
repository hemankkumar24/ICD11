import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

const App = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={ <Landing /> } />
        <Route path="/dashboard" element={  <Dashboard /> } />
      </Routes>
    </div>
  )
}

export default App