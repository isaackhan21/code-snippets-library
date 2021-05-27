import { useHistory, useParams } from "react-router-dom";
import Highlight from "react-highlight.js";
import { useState } from "react";
// import SnippetDetailItems from "./SnippetDetailItems";
import useFetch from "../useFetch";
import CodeSnippet from "./CodeSnippet";
import Button from "./Button";

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
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/snippets/" + snippet.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <div className="snippet-detail">
        <div className="buttons">
          <div className="go-back-btn">
            <Button
              className="cat-btn"
              color="blue"
              text="Go Back"
              onClick={history.goBack}
            />
          </div>
          <div className="delete-btn">
            <Button color="red" text="Delete Snippet" onClick={handleClick} />
          </div>
        </div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {snippet && (
          <div className="">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default SnippetDetail;
