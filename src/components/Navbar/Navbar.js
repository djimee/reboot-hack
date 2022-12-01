import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/sign-in'}>
                    SME2SME
                </Link>
                <Link className="navbar-brand" to={'/dashboard'}>
                    Dashboard
                </Link>
                <Link className="navbar-brand" to={'/profile'}>
                    My Profile
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/sign-in'}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/sign-up'}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar