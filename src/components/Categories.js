import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Snippets from "./Snippets";
import _ from "lodash";
import useFetch from "../useFetch";
import { useState } from "react";
import Button from "./Button";

const Categories = ({
  handleBtnsFetch,
  snippets,
  snippetsCat,
  btns,
  deleteBtn,
}) => {
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
    <div className="cat-block">
      <div className="cat-title-block">
        <h1 className="cat-title">Categories</h1>
      </div>
      <div className="cat-btns">
        <div className="all">
          <button
            className="cat-btn"
            value="All"
            onClick={(func) => {
              routeChange(func);
              handleBtnsFetch(func);
            }}
          >
            All
          </button>
        </div>

        {/* <div className="all">
          <button
            className="cat-btn"
            value="Javascript"
            onClick={(func) => {
              routeChange(func);
              handleBtnsFetch(func);
            }}
          >
            Javascript
          </button>
        </div>
        <div className="category">
          <button className="delete-cat" onClick={() => deleteBtn()}>
            Delete
          </button>
          <button
            className="cat-btn"
            value="CSS"
            onClick={(func) => {
              routeChange(func);
              handleBtnsFetch(func);
            }}
          >
            CSS
          </button>
        </div> */}
        {btns &&
          btns.map((btn, index) => {
            return (
              <div className="category" key={index}>
                <button className="delete-cat" onClick={() => deleteBtn(index)}>
                  Delete
                </button>
                <button
                  className="cat-btn"
                  value={btn}
                  // key={snippet.id}
                  onClick={(func) => {
                    routeChange(func);
                    handleBtnsFetch(func);
                    console.log("Clicked!", btn);
                  }}
                >
                  {btn}
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
    </div>
  );
};

export default Categories;
