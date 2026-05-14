import InputField from "../components/inputField";

export default function Passo2({ nome, setNome, telefone, setTelefone, email, setEmail, senha, setSenha, erro, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <h1>Cadastre-se</h1>
            <p>Passo 2 de 2.<br />Por favor insira seus dados para finalizar e prosseguir.</p>

            <InputField
                label="Nome"
                placeholder="Nome completo"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />
            <InputField
                label="Telefone"
                placeholder="(99) 99999-9999"
                type="tel"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
            />
            <InputField
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <InputField
                label="Senha"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
            >
            </InputField>

            {erro && <p>{erro}</p>}

            <button type="submit">Cadastrar</button>
        </form>
    );
}