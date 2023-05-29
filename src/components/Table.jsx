import React from 'react';
import TicketCard from './TicketCard';

const Table = ({ title, components }) => {
    return (
        <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
                <p className="font-medium">{title}</p>
            </div>
            <div className="px-6 py-4 flex flex-col gap-4">
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    );
};

export default Table;
