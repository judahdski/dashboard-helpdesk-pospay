import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/questions">Questions</Link>
                </li>
                <li>
                    <Link to="/tickets">Tickets</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
