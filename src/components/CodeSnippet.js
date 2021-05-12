import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();

const CodeSnippet = ({ prism, snippet }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className="line-numbers">
      <code className="language-js">{snippet.snippet}</code>
    </pre>
  );
};

export default CodeSnippet;
