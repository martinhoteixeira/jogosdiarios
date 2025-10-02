import './GameModal.css';

const GameModal = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <a href={game.link} target="_blank" rel="noopener noreferrer">
          <button className="play-button">Jogar</button>
        </a>
      </div>
    </div>
  );
};

export default GameModal;