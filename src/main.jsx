import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// // import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
// // import One from './components/One.jsx'
// BrowserRouter


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <BrowserRouter>
      <Router>
        <Link to='One'>READ MORE</Link>
        // <Route exact path="/One" element={<One />} />

      </Router>
    </BrowserRouter> */}

    <App />

  </StrictMode>,
)
