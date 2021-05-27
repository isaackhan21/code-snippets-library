import { Link } from "react-router-dom";

const SnippetPreview = ({ snippet, onDelete }) => {
  return (
    <div className="">
      <Link to={`/snippets/${snippet.id}`} style={{ textDecoration: "none" }}>
        <div className="snippet-item">
          <h3 className="snippet-title">{snippet.title}</h3>
          <h4 className="snippet-description">{snippet.description}</h4>
        </div>
      </Link>
      {/* <button onClick={() => onDelete(snippet.id)}>Delete</button> */}
    </div>
  );
};

export default SnippetPreview;
