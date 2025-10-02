import './GameCards.css';

const GameCard = ({ game, onClick }) => {
  return (
    <div className="game-card" onClick={() => onClick(game)}>
      <h3>{game.name}</h3>
    </div>
  );
};

export default GameCard;