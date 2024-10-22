import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Providers } from './shared/components/Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App/>
    </Providers>
  </StrictMode>,
)
