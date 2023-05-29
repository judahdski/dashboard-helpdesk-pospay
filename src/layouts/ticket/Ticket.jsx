import React from 'react';

import Table from '../../components/Table';
import TicketCard from '../../components/TicketCard';
import allTickets from './data';

const Ticket = () => {
    const tickets = allTickets.map(({ q, category, ticketNumber, isAnswered }, index) => (
        <div key={index}>
            <TicketCard q={q} category={category} ticketNumber={ticketNumber} isAnswered={isAnswered} />
        </div>
    ));

    return (
        <div className="px-12 pt-8">
            <Table title="Semua Tiket" components={tickets} />
        </div>
    );
};

export default Ticket;
