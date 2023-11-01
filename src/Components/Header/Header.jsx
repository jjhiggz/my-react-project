import './Header.css';
const Header = ({ title }) => (
    <header>
    <h1>{title}</h1>
    <nav>
      <li>about us</li>
      <li>info</li>
      <li>support us</li>
    </nav>
  </header>

);

export default Header;