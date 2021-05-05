import { Link } from "react-router-dom";

const SnippetPreview = ({ snippet }) => {
  return (
    <div>
      <Link to={`/snippets/${snippet.id}`}>
        <h3>{snippet.title}</h3>
        <h4>{snippet.description}</h4>
      </Link>
    </div>
  );
};

export default SnippetPreview;
