import React from 'react';
import './App.css';

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import AnalysisPage from "./pages/AnalysisPage";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/income" element={<IncomePage />} />
                    <Route path="/expense" element={<ExpensePage />} />
                    <Route path="/analysis" element={<AnalysisPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
