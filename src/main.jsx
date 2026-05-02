import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from './lib/router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
