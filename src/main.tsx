import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext.tsx'
import './index.css'
import { router } from './routes/router.tsx'
import './translation/i18n';
import LangProvider from './contexts/langContext.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LangProvider>
    <ToastContainer autoClose={500} closeButton={false} position='top-center' />
  </React.StrictMode>,
)
