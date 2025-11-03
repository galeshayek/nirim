import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Providers } from './providers'
import './index.css'
import { router } from './routes/router.tsx'
import './translation/i18n';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
    <ToastContainer autoClose={500} closeButton={false} position='top-center' />
  </React.StrictMode>,
)
