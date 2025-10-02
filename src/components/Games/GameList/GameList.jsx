import { useState } from 'react';
import './GameList.css';
import GameCard from '../GameCards/GameCards';
import GameModal from '../GameModal/GameModal';

const gamesData = [
  {
    name: 'Termo',
    description: 'Termo é um jogo de palavras diário em que o jogador deve descobrir a palavra secreta em até seis tentativas usando dicas de cores.',
    link: 'https://term.ooo/'
  },
  {
    name: 'Conexo',
    description: 'Conexo é um jogo diário de lógica em que o jogador deve agrupar 16 palavras em quatro conjuntos de ideias relacionadas.',
    link: 'https://conexo.ws/pt/'
  },
  {
    name: 'Contexto',
    description: 'Contexto é um jogo diário em que o jogador deve descobrir a palavra secreta testando termos e recebendo dicas baseadas em proximidade semântica.',
    link: 'https://contexto.me/pt/'
  },
  {
    name: 'Letroso',
    description: 'Letroso é um jogo diário de palavras no qual você tenta adivinhar uma palavra secreta de até 10 letras, recebendo dicas sobre presença, ordem e adjacência das letras.',
    link: 'https://letroso.com/pt/'
  },
  {
    name: 'Musicle',
    description: 'Musicle é um jogo diário em que o jogador deve adivinhar a música secreta ouvindo pequenos trechos de áudio progressivamente mais longos.',
    link: 'https://musicle.app/brasil'
  }
  ,
  {
    name: 'Valdle',
    description: 'Valdle é um jogo diário sobre Valorant no qual o jogador adivinha agentes, armas, mapas ou frases do jogo a partir de pistas visuais ou sonoras.',
    link: 'https://www.valdle.gg/'
  },
  {
    name: 'Loldle',
    description: 'Loldle é um jogo diário inspirado em League of Legends, no qual o jogador deve adivinhar campeões, skins ou termos do jogo a partir de dicas e imagens.',
    link: 'https://loldle.net/'
  },
  {
    name: 'Pokédle',
    description: 'Pokedle é um jogo diário em que o jogador deve adivinhar o Pokémon do dia a partir de silhuetas ou pistas visuais.',
    link: 'https://pokedle.net/'
  },
  {
    name: 'Framed',
    description: 'Framed é um jogo diário em que o jogador deve adivinhar o filme do dia analisando uma única cena ou quadro como pista.',
    link: 'https://framed.wtf/'
  },
  {
    name: 'Globe',
    description: 'Globe é um jogo diário em que o jogador deve adivinhar o país ou cidade do dia a partir de uma imagem ou mapa parcial.',
    link: 'https://globle-game.com/'
  },
  {
    name: 'Duotrigordle',
    description: 'Duotrigordle é um jogo diário de palavras no qual o jogador tenta resolver 32 palavras simultaneamente, recebendo dicas de letras corretas e suas posições.',
    link: 'https://duotrigordle.com/game/daily/normal'
  },
  {
    name: 'Flagdle',
    description: 'Flagdle é um jogo diário em que o jogador deve adivinhar o país do dia a partir da sua bandeira.',
    link: 'https://www.flagdle.org/'
  }
];

const GameList = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="game-list-container">
      {gamesData.map((game, index) => (
        <GameCard key={index} game={game} onClick={setSelectedGame} />
      ))}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
};

export default GameList;