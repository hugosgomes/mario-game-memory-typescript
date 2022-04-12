import "./Card.scss";
import { Char } from "../../model/Char";

interface CardProps {
  char: Char;
  onClick: any;
  index: number;
}

const Card = ({ char, onClick, index }: CardProps) => {
  return (
    <div
      className="card"
      onClick={() => {
        onClick(index);
      }}
    >
      <div
        className={`card-container ${char.status !== "closed" ? "turned" : ""}`}
      >
        <div className="front">
          <img src="back-card.png" alt="" />
        </div>
        <div className="back">
          <img src={char.imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
