import React from 'react';
import { NavLink } from 'react-router-dom';
import PospayLogo from '../assets/pospay.png';

const SideNav = ({ setNavTextHandler }) => {
    const pages = [
        {
            id: 1,
            name: 'Dashboard',
            icon: 'fa-laptop',
            hexColor: 'text-[#6679E5]',
        },
        {
            id: 2,
            name: 'Question',
            icon: 'fa-list-ul',
            hexColor: 'text-[#F54568]',
        },
        {
            id: 3,
            name: 'Ticket',
            icon: 'fa-ticket',
            hexColor: 'text-[#FB6340]',
        },
    ];

    return (
        <div className="w-[250px] h-full px-6 py-4 bg-white">
            <img src={PospayLogo} alt="Pospay Logo" />
            <hr className="h-[0.5px] mt-6 mb-8 border-none bg-[#D8D8D8]" />
            <nav>
                <ul>
                    {pages.map(({ id, name, icon, hexColor }) => (
                        <li key={id}>
                            <NavLink
                                to={name == 'Dashboard' ? '/' : `/${name.toLowerCase()}`}
                                onClick={() => setNavTextHandler(name.toLowerCase())}
                                style={({ isActive }) => {
                                    return {
                                        opacity: isActive ? '1' : '0.5',
                                        borderLeft: isActive ? '3px solid #FF6900' : '3px solid #fff',
                                    };
                                }}
                                className="w-[250px] -mx-6 px-6 py-3 inline-block"
                            >
                                <i className={`fa-solid ${icon} me-3 ${hexColor}`}></i> {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;
