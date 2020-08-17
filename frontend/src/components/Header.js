import React from 'react'
import logo from '../static/hanger.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 scrolling-navbar">
            <Link to="/" className="navbar-brand" >
                <img src={logo} className="logo-class rounded-circle z-depth-2 bg-dark" alt="100x100"/>
                <span className="lead ml-1"> WhatToWear</span>
            </Link>
            <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="index.html">
                            <i class = 'fa fa-shopping-bag'></i> Bag
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="/">
                            <i class = 'fas fa-home'></i> Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="/signup">
                            <i className='fas fa-edit'></i> Sign Up
                        </Link>
                    </li>
                    <li className="nav-link waves-effect">
                        <Link className="nav-link" to="/signin">
                            <i className='fas fa-sign-in-alt'></i> Sign In
                        </Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    )
}

export default Header