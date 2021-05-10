import { useParams } from "react-router-dom";
import Highlight from "react-highlight.js";
import { useState } from "react";
import SnippetDetailItems from "./SnippetDetailItems";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; //Example style, you can use another

const SnippetDetail = ({ snippets }) => {
  // const [snippetEditing, setSnippetEditing] = useState(null);
  // const [editingSnippet, setEditingSnippet] = useState("");
  const { id } = useParams();

  return (
    <div>
      <Highlight>
        <h1>Snippet Detail: {id}</h1>
      </Highlight>
    </div>
  );
};

export default SnippetDetail;
