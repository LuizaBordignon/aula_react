import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardPage from './pages/DashboardPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UsuarioProvider } from './context/UsuarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/disciplinas" element={<DisciplinasPage />} /> */}
          {/* <Route path="/perfil" element={<PerfilPage />} /> */}
          {/* <Route path="*" element={<NaoEncontradaPage />} /> */}
          </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>,
  
)