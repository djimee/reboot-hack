import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Login from './login.component'
import SignUp from '../Signup/signup.component'
import Profile from '../../pages/Profile'

function LoginBox() {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}

export default LoginBox