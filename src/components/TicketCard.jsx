import React, { useState } from 'react';

const TicketCard = ({ q, category, ticketNumber, isAnswered }) => {
    const [isExpand, setIsExpand] = useState(false);

    const expandNSendHandle = () => {
        if (isExpand) {
            // send the answer
            console.log('The answer was sent!');
        } else {
            setIsExpand(true);
        }
    };

    const collapseHandle = () => {
        setIsExpand(false);
    };

    const deleteTickets = () => {};

    return (
        <div className="px-4 py-2.5 rounded-lg border flex flex-col gap-2">
            <div className="flex">
                <p className="font-medium text-[#373A3D] flex-1">Q: {q}</p>
                <div
                    className="w-6 aspect-square rounded flex justify-center items-center cursor-pointer"
                    style={{
                        display: isExpand ? 'block' : 'none',
                    }}
                    onClick={() => collapseHandle()}
                >
                    <i class="fa-solid fa-xmark text-slate-600"></i>
                </div>
            </div>
            <textarea
                name="..."
                id="..."
                rows="4"
                placeholder="Apa jawaban kamu?"
                className="mt-1 mb-2 px-4 py-2 border rounded-lg"
                style={{
                    display: isExpand ? 'block' : 'none',
                    transition: '0.5s ease',
                }}
            ></textarea>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#30FF5D] to-[#5BFFBA] rounded-full text-xs">#{ticketNumber}</p>
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#ff543d] to-[#FF3880] rounded-full text-xs text-white">{category}</p>
                </div>
                <div className="flex gap-4">
                    {isAnswered ? (
                        <button className="border bg-[#ff543d] border-none rounded-lg px-4 py-1.5 text-white opacity-50" disabled>
                            Terjawab
                        </button>
                    ) : (
                        <>
                            <button 
                                className="border border-[#00FF47] rounded-lg px-4 py-1.5 text-[#00FF47] hover:bg-[#00FF47] hover:text-white transition" 
                                onClick={() => deleteTickets()}>
                                Sudah Dijawab
                            </button>
                            <button 
                                className="border bg-[#0077ff] border-none rounded-lg px-4 py-1.5 text-white transition hover:bg-[#0055ff]" 
                                onClick={() => expandNSendHandle()}>
                                Jawab
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
