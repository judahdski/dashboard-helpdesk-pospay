import React from 'react';

const StatCard = ({ title, value, hexColor }) => {
    return (
        <div className="bg-white flex-1 px-6 py-4 rounded-lg flex gap-2 justify-between items-center">
            <div className="flex flex-col gap-2">
                <p className='text-[#8898AA] text-sm'>{title}</p>
                <p className='text-[#32325D] text-base font-semibold'>{value} pertanyaan</p>
            </div>
            <i className={`fa-solid fa-circle-question text-3xl ${hexColor}`}></i>
        </div>
    );
};

export default StatCard;
