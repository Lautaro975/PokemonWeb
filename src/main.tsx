import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProviderContextGlobal } from './hooks/useContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ProviderContextGlobal>
    <App />
  </ProviderContextGlobal>
  </StrictMode>,
)
