import { useState } from "react";
import InputField from "../components/inputField";
import { useNavigate } from 'react-router-dom';
import { useUsuario } from '../context/UsuarioContext';


export default function LoginPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    
    const { setUsuario } = useUsuario();

    function handleSubmit(e){
        e.preventDefault();
        if (!user || !senha){
            setErro('Preencha todos os campos');
            return; 
        }
        setUsuario(user)
        setErro('');
        console.log('Login:', user, senha);
        navigate('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputField 
                label="Usuario"
                placeholder="user"
                type="user" 
                value={user}
                onChange={e => setUser(e.target.value)}
            />

            <InputField 
                label="Senha"
                type="password" 
                value={senha}
                onChange={e => setSenha(e.target.value)}
            > 
            <a href="esqueceu.html"> Esqueceu?</a>
            </InputField>

            {erro && <p>{erro}</p>}
            <button type="submit">Entrar</button>                     
        </form>
    )
}