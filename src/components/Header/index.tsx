import "./Header.scss"
import Title from "../Title/Title"

interface HeaderProps {
  points: number;
}

const Header = ({ points }:HeaderProps) => {
  return (
    <header>
      <Title />
      <p className="points-label">Mario</p>
      <p className="points-text">x {points}</p>
    </header>
  )
}

export default Header;