import { useState } from "react";
import Passo1 from "./Step1Register";
import Passo2 from "./Step2Register";

export default function RegisterPage(){
    const [passo, setPasso] = useState(1);

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    function handleAvancar(e){
       if(!cpf) {
        setErro('Por favor, insira seu CPF.');
        return;
       }
       setErro('')
       setPasso(2);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!nome || !telefone || !email || !senha) {
            setErro('Preencha todos os campos.');
            return;
        }
        setErro('');
    }

    
    if (passo === 1) {
        return <Passo1 cpf={cpf} setCpf={setCpf} erro={erro} onAvancar={handleAvancar} />;
    }

    return <Passo2 nome={nome} setNome={setNome} telefone={telefone} setTelefone={setTelefone} email={email} setEmail={setEmail} senha={senha} setSenha={setSenha} erro={erro} onSubmit={handleSubmit} />;
}