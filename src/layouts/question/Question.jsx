import React from 'react';
import Table from '../../components/Table';

const Question = () => {
    return <div className='px-12 py-8 flex flex-col gap-6'>
        <Table title='Frequently Asked Question' />
        <Table title='Semua Pertanyaan' />
    </div>;
};

export default Question;
