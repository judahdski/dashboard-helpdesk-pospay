import React from 'react';

const TicketCard = ({ q, category, ticketNumber, isAnswered }) => {
    return (
        <div className="px-4 py-2.5 rounded-lg border flex flex-col gap-2">
            <p className="font-medium text-[#373A3D]">Q: {q}</p>
            <div className="w-full flex justify-between items-end">
                <div className="flex gap-3">
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#30FF5D] to-[#5BFFBA] rounded-full text-xs">#{ticketNumber}</p>
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#ff543d] to-[#FF3880] rounded-full text-xs text-white">{category}</p>
                </div>
                <div className="flex gap-4">
                    {isAnswered ? (
                        <button className="border bg-[#ff543d] border-none rounded-lg px-4 py-1.5 text-white opacity-50" disabled>Terjawab</button>
                    ) : (
                        <>
                            <button className="border border-[#00FF47] rounded-lg px-4 py-1.5 text-[#00FF47] hover:bg-[#00FF47] hover:text-white transition">Sudah Dijawab</button>
                            <button className="border bg-[#0077ff] border-none rounded-lg px-4 py-1.5 text-white transition hover:bg-[#0055ff]">Jawab</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
