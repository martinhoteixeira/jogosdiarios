import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo">
                <h1>Coleção de Jogos Diários</h1>
            </div>
            <nav className="nav">
                <button onClick={() => navigate('/')}>Jogos</button>
                <button onClick={() => navigate('/Sobre')}>Sobre</button>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/Contato')}>Contato</button>
            </nav>
        </header>
    );
};