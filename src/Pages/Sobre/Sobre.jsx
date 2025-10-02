import "./Sobre.css";
import Header from "../../components/Header/Header.jsx";    

export default function Sobre() {
    return ( 
        <div>
            <Header />
             <div className="sobre-container">
      <div className="sobre-card">
        <h1 className="sobre-titulo">Sobre este projeto:</h1>
        <p className="sobre-texto">
          Olá! Este é o espaço onde compartilho uma seleção de jogos diários que desafiam e estimulam a mente de uma maneira divertida e envolvente. Meu objetivo é compartilhar experiências interativas que sejam simples de aprender, mas difíceis de parar de jogar.
        </p>
        <p className="sobre-texto">
          Cada jogo foi criado com o cuidado de proporcionar não apenas diversão, mas também uma maneira de aprimorar habilidades cognitivas e estimular o raciocínio rápido. Além disso, todos os jogos são atualizados diariamente, oferecendo novas oportunidades para testar seus limites e se divertir enquanto exercita a mente.
        </p>
        <p className="sobre-texto">
          A ideia por trás deste projeto é criar algo que combine leveza, diversão e desafios diários, tudo acessível de forma prática, para que qualquer pessoa possa jogar, aprender e se entreter a qualquer momento.
        </p>
        <p className="sobre-texto">
          Aproveite a experiência e não se esqueça de voltar todos os dias para testar suas habilidades e acompanhar as atualizações!
        </p>
      </div>
    </div>
        </div>
     );
}