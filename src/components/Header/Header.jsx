import "./Header.css";

export default function Header() {
    return (
    <header className="header">
      <div className="logo">
        <h1>Coleção de Jogos Diários</h1>
      </div>
      <nav className="nav">
        <a href="http://localhost:5173/"><button>Jogos</button></a>
        <a href="http://localhost:5173/Sobre"><button>Sobre</button></a>
        <a href="http://localhost:5173/login"><button>Login</button></a>
        <a href="http://localhost:5173/Contato"><button>Contato</button></a>
      </nav>
    </header>
  );
};