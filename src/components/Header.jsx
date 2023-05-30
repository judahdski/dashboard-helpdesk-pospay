import React from 'react';
import ProfileMenu from './ProfileMenu';

const Header = ({ navText }) => {
    return (
        <div className="px-12 py-2 flex justify-between items-center bg-gradient-to-r from-[#FF6900] to-[#D14124] text-white fixed left-[250px] right-0">
            <p className="font-medium">{navText.toUpperCase()}</p>
            <ProfileMenu />
        </div>
    );
};

export default Header;
