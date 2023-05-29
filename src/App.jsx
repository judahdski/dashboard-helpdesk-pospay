import './App.css';
import { Routes, Route } from 'react-router-dom';

import SideNav from './components/SideNav';

import Dashboard from './layouts/dashboard/Dashboard';
import Question from './layouts/question/Question';
import Ticket from './layouts/ticket/Ticket';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [navText, setNavText] = useState('dashboard');

    return (
        <>
            <div className="w-full h-full flex">
                <SideNav setNavTextHandler={setNavText} />
                <div className="flex-1 flex flex-col">
                    <Header navText={navText} />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/question" element={<Question />} />
                            <Route path="/ticket" element={<Ticket />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
