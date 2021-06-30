import SnippetPreview from "./SnippetPreview";
import { useState } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";

const Snippets = ({
  snippets,
  onDelete,
  btns,
  handleBtnsFetch,
  showSearch,
  deleteBtn,
  showMessage,
  
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [snippetCopy, setSnippetCopy] = useState([]);

  // const handleBtnsFetch = (e) => {
  //   let snippetCopy;
  //   if (e.target.value === "All") {
  //     setSnippetCopy(snippets);
  //   } else {
  //     setSnippetCopy(
  //       snippets.filter((snippet) => snippet.category === e.target.value)
  //     );
  //   }
  // };

  return (
    <div className="snippets-list">
      <div className="box">
        <div className="categories">
          <Categories
            btns={btns}
            handleBtnsFetch={handleBtnsFetch}
            snippets={snippets}
            deleteBtn={deleteBtn}
            
          />
        </div>
        <div className="snippets">
          <div className="top-elements">
            <Link className="create-link" to="/create">
              <div className="add-snippet-div">
                <h3>Add Snippet</h3>
              </div>
            </Link>
            <div className="search">
              {showSearch && (
                <input
                  className="search-snippet"
                  type="text"
                  placeholder="   Search Snippet..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              )}
            </div>
          </div>
          {!showSearch && (
            <div className="intro-message-container">
              <div className="intro-message">
                <h1>Welcome to the Code Snippets Library</h1>
                <h1>Please Select a Category or Add a Snippet</h1>
              </div>
            </div>
          )}
          <div className="snippet-items">
            {snippets.length > 0
              ? snippets
                  .filter((snippet) => {
                    if (searchTerm == "") {
                      return snippet;
                    } else if (
                      snippet.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return snippet;
                    } else if (
                      snippet.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return snippet;
                    } else if (
                      snippet.project
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return snippet;
                    } else if (
                      snippet.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return snippet;
                    }
                  })
                  .map((snippet) => (
                    <SnippetPreview
                      key={snippet.id}
                      snippet={snippet}
                      onDelete={onDelete}
                    />
                  ))
              : showMessage && "No Snippets, Select another Category "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
