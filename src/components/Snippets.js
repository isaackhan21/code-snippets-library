import SnippetPreview from "./SnippetPreview";
import { useState } from "react";

const Snippets = ({ snippets, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="snippets-list">
      <input
        type="text"
        placeholder="Search Snippet..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="snippets">
        {snippets
          .filter((snippet) => {
            if (searchTerm == "") {
              return snippet;
            } else if (
              snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          ))}
      </div>
    </div>
  );
};

export default Snippets;
