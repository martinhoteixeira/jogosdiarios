import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="logo">
                <h1>Coleção de Jogos Diários</h1>
            </div>
            <nav className="nav">
                <button onClick={() => navigate('/')}>Jogos</button>
                <button onClick={() => navigate('/sobre')}>Sobre</button>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/contato')}>Contato</button>
            </nav>
        </header>
    );
};