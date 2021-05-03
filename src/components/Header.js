import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Code Snippets</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Add Snippet</Link>
    </div>
  );
};

export default Header;
