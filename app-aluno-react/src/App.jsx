import { useState } from "react";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './assets/style.css'

function App() {
  const [pagina, setPagina] = useState('login');

  return (
    <>
      <div className="container">
        <div className="hero">
            <p>
                "Educação não é o aprendizado de fatos,
                mas treinamento da mente para pensar."
                <span>Albert Einstein</span>
            </p>
        </div>

        <div className="formulario">
            <div>

                {pagina === 'login' && (
                    <>
                        <h1>Bem-vindo de volta</h1>
                        <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>
                        <LoginPage />
                        <p className="registre-se">Não tem uma conta? <a onClick={() => setPagina('registro')}>Registre-se agora.</a></p>
                    </>
                )}

                {pagina === 'registro' && (
                    <RegisterPage />
                )}

            </div>
        </div>

      </div>
    </>
  )
}

export default App