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
  } = useFetch("https://react-snippet.herokuapp.com/api/snippets/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("https://react-snippet.herokuapp.com/api/snippets/" + snippet.id, {
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
          <div className="detail-body">
            <div className="detail-title-des">
              <div className="detail-title-div">
                <h1 className="detail-title">
                  {snippet.title ? snippet.title : "No Title"}
                </h1>
              </div>
              <div className="detail-des-div">
                <h2 className="detail-des">
                  {snippet.description ? snippet.description : "No Description"}
                </h2>
              </div>
            </div>
            <div className="detail-project-cat">
              <div className="detail-project-div">
                <h2>
                  Project: {snippet.project ? snippet.project : "No Project"}
                </h2>
              </div>
              <div className="detail-cat-div">
                <h2>Category: {snippet.category}</h2>
              </div>
            </div>
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
