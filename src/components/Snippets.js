import SnippetPreview from "./SnippetPreview";
import { useState } from "react";
import Categories from "./Categories";

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
