import React, { useState } from 'react';

const ProfileMenu = () => {
    const [isMenuExpand, setIsMenuExpand] = useState(false);

    const expandCollapseHandle = () => {
        setIsMenuExpand(!isMenuExpand);
    };

    const logout = () => {
        // logout the account
        console.log('The account was logged out!');
    };

    return (
        <div className="relative">
            <div className="px-4 py-2 bg-[#c53717] hover:bg-[#b42b0c] rounded-lg flex items-center gap-2 cursor-pointer" onClick={() => expandCollapseHandle()}>
                <div className="w-[32px] aspect-square rounded-full bg-slate-700"></div>
                <p className="text-sm">Judah Dasuki</p>
            </div>

            <div
                className="absolute left-0 right-0 mt-1"
                style={{
                    display: isMenuExpand ? 'block' : 'none',
                }}
            >
                <p className="px-4 py-2 rounded-lg bg-white hover:bg-gray-50 text-slate-700 text-center shadow-lg border cursor-pointer" onClick={() => logout()}>
                    Keluar
                </p>
            </div>
        </div>
    );
};

export default ProfileMenu;
