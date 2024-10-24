import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Providers } from './shared/components/Provider.tsx'
import { Layout } from './shared/Layout/NavBar-SideBar.tsx'
import { Certificaciones } from './pages/certificaciones/index.tsx'

import { OverviewPage } from './pages/overview/index.tsx'
import { Landing } from './pages/landing/index.tsx'
import PerfilPage from './pages/perfil/index.tsx'
import { Scholarships } from './pages/scholarships/index.tsx'
import { Partnerships } from './pages/scholarships/status/index.tsx'

const router = createBrowserRouter([
  {path: '/', element: <Landing/>},

  {
    
    path: '/',
    element:<Layout/>,
    children: [
      {path: '/dashboard', element: <Certificaciones /> },
      {path: '/overview', element: <OverviewPage/>},
      {path: '/profile', element: <PerfilPage/>},
      {path: '/scholarships', element: <Scholarships/>},
      {path: '/scholarships/status', element: <Partnerships/>},
    ],
  }, 
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers >
      <RouterProvider router={router}/>
    </Providers>
  </StrictMode>,
)
