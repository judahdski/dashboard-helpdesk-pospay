import React from 'react';

import StatCard from './components/StatCard';
import Table from '../../components/Table';

import { statData } from './data/index';
import TicketCard from '../../components/TicketCard';

const Dashboard = () => {
    const availableTickets = [<TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />];

    return (
        <div>
            <div className="w-full p-12 pb-36 flex gap-4 bg-gradient-to-r from-[#FF6900] to-[#D14124]">
                {statData.map(({ id, title, value, hexColor }) => (
                    <StatCard key={id} title={title} value={value} hexColor={hexColor} />
                ))}
            </div>
            <div className="-mt-24 px-12">
                <Table title="Tiket yang tersedia" components={availableTickets} />
            </div>
        </div>
    );
};

export default Dashboard;
