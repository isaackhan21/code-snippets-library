import { Link } from "react-router-dom";
import Button from "./Button";
const Header = ({}) => {
  return (
    <header className="header-content">
      <h1 className="header-title">Code Snippets</h1>
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="create-link" to="/create">
        Add Snippet
      </Link>
    </header>
  );
};

export default Header;
