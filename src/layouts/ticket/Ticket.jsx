import React from 'react';

import Table from '../../components/Table';
import TicketCard from '../../components/TicketCard';

const Ticket = () => {
    const allTickets = [<TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />, <TicketCard />];

    return (
        <div className="px-12 pt-8">
            <Table title="Semua Tiket" components={allTickets} />
        </div>
    );
};

export default Ticket;
