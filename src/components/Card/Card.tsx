import "./Card.scss";
import { Char } from "../../model/Char";

interface CardProps {
  char: Char;
  onClick: any;
  index: number;
}

const Card = ({ char, onClick, index }: CardProps) => {

  const isTurned = () => {
    return char.status !== "closed" ? "turned" : ""
  }
  return (
    <div
      className="card"
      onClick={() => {
        onClick(index);
      }}
    >
      <div
        className={`card-container ${isTurned()}`}
      >
        <div className="front">
          <img src="assets/images/back-card.png" alt="" />
        </div>
        <div className="back">
          <img src={`assets/images/${char.imageUrl}`} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Card;
