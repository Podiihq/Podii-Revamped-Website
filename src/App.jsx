import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/servicespage/ServicesPage';
import PortfolioPage from './pages/portfoliopage/PortfolioPage';
import SmartFarm from './pages/portfoliopage/projects/SmartFarm';
import Vibrant from './pages/portfoliopage/projects/Vibrant';
import Tectona from './pages/portfoliopage/projects/Tectona';
import QBQ from './pages/portfoliopage/projects/QBQ';
import ContactForm from './pages/contactpage/Contact';
import Success from './pages/contactpage/Success';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/success' element={<Success />} />


        {/* Projects */}
        <Route path='/smart-farm' element={<SmartFarm />} />
        <Route path='/vibrant' element={<Vibrant />} />
        <Route path='/tectona' element={<Tectona />} />
        <Route path='/qbq' element={<QBQ />} />
      </Routes>
    </>
  )
}

export default App
