import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-content">
      <h1>Code Snippets</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Add Snippet</Link>
    </header>
  );
};

export default Header;
