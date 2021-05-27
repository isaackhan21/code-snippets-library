import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Snippets from "./Snippets";
import _ from "lodash";
import useFetch from "../useFetch";
import { useState } from "react";

const Categories = ({ handleBtnsFetch, snippets, snippetsCat, btns }) => {
  const [snippetCopy, setSnippetCopy] = useState([]);
  // let newArr = snippetsCat.map((snippet) => snippet.category);
  // let categorySet = new Set(newArr);
  // let cat = [...categorySet];
  // console.log(cat);
  // const categories = Array.from(categorySet).sort();
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

  let history = useHistory();
  const routeChange = () => {
    let path = "/";

    history.push(path);
  };

  // const categories = snippetsCat.map((x) => x.category);
  // const uniqueCat = [...new Set(categories)];

  return (
    <div className="cat-btns">
      {/* <button
        value="All"
        onClick={(func) => {
          routeChange(func);
          handleBtns(func);
        }}
      >
        All
      </button> */}
      {btns &&
        btns.map((snippet, index) => {
          return (
            <div key={index}>
              <button
                className="cat-btn"
                value={snippet}
                key={snippet.id}
                onClick={(func) => {
                  routeChange(func);
                  handleBtnsFetch(func);
                  console.log("Clicked!", snippet);
                }}
              >
                {snippet}
              </button>
            </div>
          );
        })}

      {/* {snippets && <Snippets snippets={snippets} btns={btns} />} */}

      {/* {snippets.map((snippet) => {
        return (
          <div>
            <button
              value={snippet}
              onClick={(func) => {
                routeChange(func);
                handleBtns(func);
              }}
            >
              {snippet.category}
            </button>
          </div>
        );
      })} */}

      {/* <button
        value="Javascript"
        onClick={(func) => {
          routeChange(func);
          handleBtns(func);
        }}
      >
        Javascript
      </button>
      <button
        value="React"
        onClick={(func) => {
          routeChange(func);
          handleBtns(func);
        }}
      >
        React
      </button>
      <button
        value="HTML"
        onClick={(func) => {
          routeChange(func);
          handleBtns(func);
        }}
      >
        HTML
      </button>
      <button>Back</button>
    </div> */}
    </div>
  );
};

export default Categories;
