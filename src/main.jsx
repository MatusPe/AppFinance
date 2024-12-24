import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderApp from './Header.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./LoginPage.jsx";
import SidebarDemo from "./components/MyComponent/Expenses/SiderBar.jsx";
import ExpensesPage from "@/ExpensesPage.jsx";
import LoanPage from "@/LoanPage.jsx";





createRoot(document.getElementById('root')).render(

    <StrictMode>
        <Router>
            <HeaderApp /> {/* This can be consistent across pages */}
            <Routes>

                <Route path="/" element={<LoginPage />} />
                <Route path="/wallet" element={<ExpensesPage />} />
                <Route path="/Loan" element={<LoanPage />} />


            </Routes>
        </Router>

    </StrictMode>,
)
