import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Dashboard from './layouts/dashboard/Dashboard';
import Question from './layouts/question/Question';
import Ticket from './layouts/ticket/Ticket';

function App() {
    return (
        <>
            <div className="w-full flex">
                <SideNav />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/questions" element={<Question />} />
                    <Route path="/tickets" element={<Ticket />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
