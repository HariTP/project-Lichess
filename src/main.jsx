// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profile from './components/profile.jsx'
import Leaderboard from './components/leaderboards.jsx'
import Tournament from './components/tournaments.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/leaderboards' element={<Signin/>}/>
        <Route path='/tournaments' element={<Tournament/>}/>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
);
