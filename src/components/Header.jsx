import React from 'react';

const Header = ({ navText }) => {
    return (
        <div className="px-12 py-4 flex justify-between items-center bg-gradient-to-r from-[#FF6900] to-[#D14124] text-white fixed left-[250px] right-0">
            <p className="font-medium">{navText.toUpperCase()}</p>
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-[32px] aspect-square rounded-full bg-slate-700"></div>
                <p className="text-sm">Judah Dasuki</p>
            </div>
        </div>
    );
};

export default Header;
