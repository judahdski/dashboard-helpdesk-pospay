import React from 'react';

const QuestionCard = ({ question, answer, ticketNumber, category }) => {
    const deleteQuestionHandle = () => {};

    return (
        <div className="px-4 py-2.5 rounded-lg border flex flex-col gap-2">
            <div className="mb-3.5 flex justify-between items-center">
                <div className="flex gap-3">
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#30FF5D] to-[#5BFFBA] rounded-full text-xs">#{ticketNumber}</p>
                    <p className="px-2 py-[2px] bg-gradient-to-r from-[#FF543D] to-[#FF3880] rounded-full text-xs text-white">{category}</p>
                </div>
                <div className="w-[24px] aspect-square rounded flex justify-center items-center p-0.5 cursor-pointer" onClick={() => deleteQuestionHandle()}>
                    <i className="fa-solid fa-trash text-red-500 hover:text-red-600 transition"></i>
                </div>
            </div>
            <div>
                <p className="font-medium text-[#373A3D]">Q: {question}</p>
                <p className="text-[#373A3D] mt-2">
                    A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid vero recusandae, reiciendis, voluptatibus fuga tempore incidunt earum officia cumque molestiae similique, perferendis dolorum. Saepe!
                </p>
            </div>
        </div>
    );
};

export default QuestionCard;
