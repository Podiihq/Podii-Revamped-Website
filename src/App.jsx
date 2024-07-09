import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/servicespage/ServicesPage';
import PortfolioPage from './pages/portfoliopage/PortfolioPage';
import SmartFarm from './pages/portfoliopage/projects/SmartFarm';
import Vibrant from './pages/portfoliopage/projects/Vibrant';
import Tectona from './pages/portfoliopage/projects/Tectona';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />


        {/* Projects */}
        <Route path='/smart-farm' element={<SmartFarm />} />
        <Route path='/vibrant' element={<Vibrant />} />
        <Route path='/tectona' element={<Tectona />} />
      </Routes>
    </>
  )
}

export default App
