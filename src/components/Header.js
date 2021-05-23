import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header className="header-content">
      <h1>Code Snippets</h1>
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
