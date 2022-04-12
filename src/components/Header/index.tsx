import "./Header.scss"

interface HeaderProps {
  result: string;
}

const Header = ({ result }:HeaderProps) => {
  return (
    <header>
      {result}
    </header>
  )
}

export default Header;