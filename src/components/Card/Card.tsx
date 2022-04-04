import "./Card.scss";
import { useState } from "react";

interface CardProps {
  imageUrl: string;
}

const Card = ({ imageUrl }: CardProps) => {
  const [turned, setTurned] = useState(false);

  return (
    <div className="card" onClick={() => setTurned(!turned)}>
      <div className={`card-container ${turned ? "turned" : ""}`}>
        <div className="front">
          <img src={imageUrl} alt="" />
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};
export default Card;
