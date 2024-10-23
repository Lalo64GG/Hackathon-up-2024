import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Providers } from './shared/components/Provider.tsx'
import { Layout } from './shared/Layout/NavBar-SideBar.tsx'
import { Certificaciones } from './pages/certificaciones/index.tsx'

import { OverviewPage } from './pages/overview/index.tsx'
import { Landing } from './pages/landing/index.tsx'


const router = createBrowserRouter([
  {path: '/', element: <Landing/>},

  {
    
    path: '/',
    element:<Layout/>,
    children: [
      { path: '/certificaciones', element: <Certificaciones /> },
      { path: '/overview', element: <OverviewPage/>}
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
