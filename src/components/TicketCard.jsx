import React from 'react'

const TicketCard = () => {
    return <div className='px-4 py-2.5 rounded-lg border flex flex-col gap-2'>
        <p className='font-medium text-[#373A3D]'>Q: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis!</p>
        <div className="w-full flex justify-between items-end">
            <div className="flex gap-3">
                <p className="px-2 py-[2px] bg-gradient-to-r from-[#30FF5D] to-[#5BFFBA] rounded-full text-xs">#675383</p>
                <p className="px-2 py-[2px] bg-gradient-to-r from-[#FF543D] to-[#FF3880] rounded-full text-xs text-white">Category 1</p>
            </div>
            <div className="flex gap-4">
                <button className='border border-[#00FF47] rounded-lg px-4 py-1.5 text-[#00FF47] hover:bg-[#00FF47] hover:text-white transition'>Sudah Dijawab</button>
                <button className='border bg-[#0094FF] border-none rounded-lg px-4 py-1.5 text-white transition hover:bg-[#007bff]'>Jawab</button>
            </div>
        </div>
    </div>;
};

export default TicketCard;