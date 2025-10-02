import "./Contato.css";
import Header from "../../components/Header/Header.jsx";


export default function Contato() {
     return (
    <div className="contact-container">
        <Header />
      <h1>Contato</h1>
      <p>Você pode me encontrar nas seguintes plataformas:</p>
      
      <ul className="contact-list">
        <li>
          <a href="https://www.instagram.com/martinho_cst/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/martinhoteixeira" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:martinho.cteixeira@gmail.com" target="_blank" rel="noopener noreferrer">
            E-mail
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/martinho-teixeira/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}