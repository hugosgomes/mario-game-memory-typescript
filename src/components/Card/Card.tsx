import "./Card.scss";
import { Char } from "../../model/Char";

interface CardProps {
  char: Char;
  closeChars: any;
  openChar: any;
  index: number;
}

const Card = ({ char, closeChars, index, openChar }: CardProps) => {

  const changeStatusChar = () => {
    char.status === "opened"
      ? (char.status = "closed")
      : (char.status = "opened");
  };

  return (
    <div
      className="card"
      onClick={() => {
        changeStatusChar();
        closeChars();
        openChar(index)
      }}
    >
      <div className={`card-container ${char.status !== "closed" ? "turned" : ""}`}>
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
