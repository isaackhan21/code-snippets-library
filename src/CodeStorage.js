import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import AddSnippet from "./components/AddSnippet";
import Snippets from "./components/Snippets";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import React from "react";
import Component from "react";
import { snippetDatabase } from "./SnippetDatabase";
import { categoriesDatabase } from "./SnippetDatabase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: categoriesDatabase,
      snippets: snippetDatabase,
      newSnippet: "",
      snippetsFiltered: [],
      snippetsFilteredDelete: [],
      btns: ["All", "React", "Javascript", "HTML"],
    };
  }

  handleCat = (e) => {
    let snippetsFiltered;
    if (e.target.value === "All") {
      snippetsFiltered = this.state.snippets;
    } else {
      snippetsFiltered = this.state.snippets.filter(
        (item) => item.category === e.target.value
      );
    }

    this.setState({
      snippetsFiltered: snippetsFiltered,
    });
  };

  addSnippet = (snippet, cat) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const category = cat;
    const newSnippet = {
      id,
      ...snippet,
      category,
    };
    const snippets = [...this.state.snippets];
    snippets.push(newSnippet);
    this.setState({
      snippets,
      newSnippet: "",
    });
    console.log("Snippets:", snippets);
  };

  deleteSnippet = (id) => {
    const list = [...this.state.snippetsFiltered];
    const updatedList = list.filter((i) => i.id !== id);
    console.log("Delete!", id);
    this.setState({
      snippetsFiltered: updatedList,
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="base">
            <Base
              snippets={this.state.snippetsFiltered}
              allSnippets={this.state.snippets}
              onAdd={this.addSnippet}
              onDelete={this.deleteSnippet}
            />
          </div>
          <div className="sidebar">
            <Sidebar
              handleCat={this.handleCat}
              snippets={this.state.snippets}
              btns={this.state.btns}
            />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// Adding form
import { useState } from "react";

const AddSnippet = ({ snippets, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snippet, setSnippet] = useState("");
  const [category, setCategory] = useState("");
  const [isDropDown, setIsDropdown] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, description, snippet }, category);

    setTitle("");
    setDescription("");
    setSnippet("");
    setCategory("");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>AddSnippet</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Add Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Note Description</label>
        <input
          type="text"
          placeholder="Add Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Content</label>
        <input
          type="text"
          placeholder="Add Note"
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
        />
      </div>
      {isDropDown && (
        <div>
          <select onChange={(e) => setCategory(e.target.value)}>
            {snippets.map((snippet) => (
              <option
                selected="selected"
                key={snippet.id}
                value={snippet.category}
              >
                {snippet.category}
              </option>
            ))}
          </select>
        </div>
      )}
      {!isDropDown && (
        <div className="form">
          <label>Create Category</label>
          <input
            type="text"
            placeholder="Add Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      )}
      <input type="submit" value="Save Snippet" />
    </form>
  );
};

export default AddSnippet;

// Class App.js

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import AddSnippet from "./components/AddSnippet";
import Snippets from "./components/Snippets";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import React from "react";
import Component from "react";
import { snippetDatabase } from "./SnippetDatabase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      snippets: snippetDatabase,
      newSnippet: "",
    };
  }

  addSnippet = (snippet, cat) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newSnippet = {
      id,
      ...snippet,
    };
    const snippets = [...this.state.snippets];
    snippets.push(newSnippet);
    this.setState({
      snippets,
      newSnippet: "",
    });
  };

  deleteSnippet = (id) => {
    const list = [...this.state.snippets];
    const updatedList = list.filter((i) => i.id !== id);
    this.setState({
      snippets: updatedList,
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="base">
            <Base snippets={this.state.snippets} onAdd={this.addSnippet} />
          </div>
          <div className="sidebar">
            <Sidebar
              snippets={this.state.snippets}
              onDelete={this.deleteSnippet}
            />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


{btns.map((btn) => {
  return (
    <div>
      <button
        value={btn}
        onClick={(func) => {
          routeChange(func);
          handleBtns(func);
        }}
      >
        {btn}
      </button>
    </div>
  );
})}

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


//Categories Static

 {/* {staticButtons.map((button, index) => {
          return (
            <div className="category" key={index}>
              <button
                className="delete-cat"
                onClick={() => deleteStaticButton(index)}
              >
                Delete
              </button>
              <button
                className="cat-btn"
                value={button}
                // key={snippet.id}
                onClick={(func) => {
                  routeChange(func);
                  handleBtnsFetch(func);
                  console.log("Clicked!", button);
                }}
              >
                {button}
              </button>
            </div>
          );
        })} */}

