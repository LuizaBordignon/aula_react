import { useState, useEffect } from "react";
import { buscarUsuario } from "../services/githubService";
import { Link, NavLink } from 'react-router-dom';
import { useUsuario } from '../context/UsuarioContext';

export default function DashboardPage(){
    const [usuarioGit, setUsuarioGit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    const { usuario } = useUsuario();
    const [busca, setBusca] = useState(usuario);

    useEffect(() => {
        async function  carregar() {
            try {
                const dados = await buscarUsuario(busca);
                setUsuarioGit(dados);

            } catch (error){
                setErro(erro.message);
            } finally{
                setLoading(false);
            }            
        }

        carregar();

    }, [busca]);

    if (loading) return <p> Carregando dados... </p>;
    if (erro) return <p>{erro}</p>

    return <>
        <h1>Olá, {usuarioGit.name || usuarioGit.loading}!</h1>
        <img width='300' src={usuarioGit.avatar_url}/>

        <a href="/">Voltar</a>
    </>

}

