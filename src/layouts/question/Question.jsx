import React from 'react';

import Table from '../../components/Table';
import QuestionCard from '../../components/QuestionCard';

const Question = () => {
    const questions = [<QuestionCard />, <QuestionCard />, <QuestionCard />, <QuestionCard />, <QuestionCard />, <QuestionCard />];

    return (
        <div className="px-12 pt-8 flex flex-col gap-6">
            <Table title="Frequently Asked Question" components={questions} />
            <Table title="Semua Pertanyaan" components={questions} />
        </div>
    );
};

export default Question;
