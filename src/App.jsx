import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
