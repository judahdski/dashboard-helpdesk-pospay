import React from 'react';

const QuestionCard = () => {
    return (
        <div className="px-4 py-2.5 rounded-lg border flex flex-col gap-2">
            <p className="font-medium text-[#373A3D]">Q: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, perspiciatis!</p>
            <p className="text-[#373A3D] mt-2 mb-4">A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid vero recusandae, reiciendis, voluptatibus fuga tempore incidunt earum officia cumque molestiae similique, perferendis dolorum. Saepe!</p>
            <div className="flex gap-3">
                <p className="px-2 py-[2px] bg-gradient-to-r from-[#30FF5D] to-[#5BFFBA] rounded-full text-xs">#675383</p>
                <p className="px-2 py-[2px] bg-gradient-to-r from-[#FF543D] to-[#FF3880] rounded-full text-xs text-white">Category 1</p>
            </div>
        </div>
    );
};

export default QuestionCard;
