// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path='/*' element={<App />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
// )

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import { hydrate } from 'react-dom';

hydrate(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
