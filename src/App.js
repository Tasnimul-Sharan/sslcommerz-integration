import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './components/Payments/Payment';
import Success from './components/pages/Success';
import Fail from './components/pages/Fail';
import Cancel from './components/pages/Cancel';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                <Route path="/fail" element={<Fail />} />
                <Route path="/cancel" element={<Cancel />} />
            </Routes>
        </Router>
    );
};

export default App;
