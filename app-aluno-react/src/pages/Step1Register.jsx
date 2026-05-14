import InputField from "../components/inputField";

export default function Passo1({ cpf, setCpf, erro, onAvancar }) {
    return (
        <>
            <h1>Cadastre-se</h1>
            <p>Passo 1 de 2.<br />Por favor insira seu CPF para prosseguir.</p>

            <InputField
                label="CPF"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
            />

            {erro && <p>{erro}</p>}

            <button type="button" onClick={onAvancar}>Prosseguir</button>
        </>
    );
}