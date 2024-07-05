import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/servicespage/ServicesPage';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </>
  )
}

export default App
