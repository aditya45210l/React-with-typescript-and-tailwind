import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FilterContext from './Components/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterContext>
    <App />
    </FilterContext>
  </StrictMode>,
)
