import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Navbar from './components/Navbar'
import LoginBox from './components/LoginBox'
import TableComponent from './components/TableComponent'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LoginBox />
        <TableComponent />
        {/* <NavLink to="/dashboard">
          <Dashboard />
        </NavLink> */}
      </div>
    </Router>
  )
}

export default App