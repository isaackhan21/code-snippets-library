import { Link } from "react-router-dom";

const SnippetPreview = ({ snippet, onDelete }) => {
  return (
    <div className="">
      <Link to={`/snippets/${snippet.id}`} style={{ textDecoration: "none" }}>
        <div className="snippet-item">
          <div className="snippet-title-div">
            <h3 className="snippet-title">{snippet.title}</h3>
          </div>
          <div className="snippet-des-div">
            <h4 className="snippet-description">{snippet.description}</h4>
          </div>
          <div className="project-category-div">
            <div className="snippet-project-div">
              <h4 className="snippet-project">Project: {snippet.project}</h4>
            </div>
            <div className="snippet-cat-div">
              <h4 className="snippet-category">Category: {snippet.category}</h4>
            </div>
          </div>
        </div>
      </Link>
      {/* <button onClick={() => onDelete(snippet.id)}>Delete</button> */}
    </div>
  );
};

export default SnippetPreview;
