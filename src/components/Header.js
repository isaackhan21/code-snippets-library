import { Link } from "react-router-dom";
import Button from "./Button";
const Header = ({ showAddSnippet, addSnippetButton }) => {
  return (
    <header className="header-content">
      <h1 className="header-title">Code Snippets Library</h1>
      <Link className="home-link" to="/">
        <div className="home-link-div">Home</div>
      </Link>
      {/* <Link className="create-link" to="/create">
        Add Snippet
      </Link> */}
    </header>
  );
};

export default Header;
