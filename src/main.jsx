import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path='/*' element={<App />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
// )


const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
