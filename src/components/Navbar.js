import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './styles/Navbar.css';

const Navbar = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Codacular</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">{user.name}</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => {
                                    // handle logout here
                                }}>Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </>
                )}
        </ul>
    </div>
</nav>
);
}

export default Navbar;

