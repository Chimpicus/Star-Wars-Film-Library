import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Film List</Link>
            </div>
        </nav>
    );
};

export default Navbar;
