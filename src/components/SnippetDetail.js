import { useParams } from "react-router-dom";
import Highlight from "react-highlight.js";
import { useState } from "react";
import SnippetDetailItems from "./SnippetDetailItems";
import useFetch from "../useFetch";
import CodeSnippet from "./CodeSnippet";

// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css"; //Example style, you can use another

const SnippetDetail = ({ snippets, prism }) => {
  const { id } = useParams();
  const {
    data: snippet,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/snippets/" + id);

  const handleClick = () => {};

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {snippet && (
        <div>
          {snippet.title}
          {snippet.description}
          {/* <Highlight> */}
          {/* <pre */}
          {/* // className="ft-syntax-highlight"
          // data-syntax="js"
          // data-syntax-theme="one-dark"
          > */}
          {/* <code>{snippet.snippet}</code>
          </pre> */}
          {/* </Highlight> */}
          <CodeSnippet snippet={snippet} prism={prism} />
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SnippetDetail;
