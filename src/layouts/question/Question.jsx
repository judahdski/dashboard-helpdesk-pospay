import React from 'react';

import Table from '../../components/Table';
import QuestionCard from '../../components/QuestionCard';
import { allQuestions, faqQuestion } from './data';

const Question = () => {
    const questions = allQuestions.map(({ q, category, ticketNumber }, index) => (
        <div key={index}>
            <QuestionCard question={q} category={category} ticketNumber={ticketNumber} />
        </div>
    ));

    const faq = faqQuestion.map(({q, category, ticketNumber}, index) => (
        <div key={index}>
            <QuestionCard question={q} category={category} ticketNumber={ticketNumber} />
        </div>
    ))

    return (
        <div className="px-12 pt-8 flex flex-col gap-6">
            <Table title="Frequently Asked Question" components={faq} />
            <Table title="Semua Pertanyaan" components={questions} />
        </div>
    );
};

export default Question;
