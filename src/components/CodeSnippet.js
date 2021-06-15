import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-okaidia.css";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();

const CodeSnippet = ({ prism, snippet }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  });

  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isCopied) setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <div className="code-div">
      <CopyToClipboard text={snippet.snippet} onCopy={handleCopy}>
        <div className="copied-container">
          <div className="copied">
            {isCopied ? <h3>Copied</h3> : <h3>Copy to Clipboard</h3>}
          </div>
        </div>
      </CopyToClipboard>
      <div className="code-block">
        <pre className="line-numbers">
          {/* <div>{isCopied && <h3>Copied</h3>}</div> */}
          <code className="language-js">{snippet.snippet}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
