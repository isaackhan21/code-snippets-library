import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import AddSnippet from "./components/AddSnippet";
import Snippets from "./components/Snippets";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { snippetDatabase } from "./SnippetDatabase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import Prism from "prismjs";
import { useHistory } from "react-router-dom";

const btnsfromLocalStorage = JSON.parse(localStorage.getItem("btns")) || "[]";

function App() {
  const [snippetCopy, setSnippetCopy] = useState([]);
  const [snipCat, setSnipCat] = useState([]);
  // const [btns, setbtns] = useState(["All", "React"]);
  const [btns, setbtns] = useState(btnsfromLocalStorage);
  const [showAddSnippet, setShowAddSnippet] = useState(true);

  const {
    data: snippets,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/snippets");

  function usePrismHighlightAll() {
    useEffect(() => {
      setTimeout(() => Prism.highlightAll(), 0);
    }, []);
  }

  // useEffect(() => {
  //   const data = localStorage.getItem("btns");
  //   if (data) {
  //     setbtns(JSON.parse(data));
  //   }
  //   setbtns();
  // }, []);

  useEffect(() => {
    localStorage.setItem("btns", JSON.stringify(btns));
  }, [btns]);

  // const handleBtns = (e) => {
  //   let snippetCopy;
  //   if (e.target.value === "All") {
  //     setSnippetCopy(snippets);
  //   } else {
  //     setSnippetCopy(
  //       snippets.filter((snippet) => snippet.category === e.target.value)
  //     );
  //   }
  // };

  const deleteBtn = (id) => {
    setbtns((btns) => btns.filter((btn, index) => index !== id));
    // setbtns(btns.splice(index, 1));
    // localStorage.setItem("btns", JSON.stringify(btns));
  };

  const addSnippetButton = (e) => {
    e.preventDefault();
  };

  const addCategory = (category) => {
    if (category == null) {
      setbtns([...btns, category]);
      console.log(btns);
    }
  };

  const addCategoryText = (category) => {
    setbtns([...btns, category]);
    console.log(btns);
    // setSnippetCopy(snippets);
  };

  // addSnippet = (snippet, cat) => {
  //   const id = Math.floor(Math.random() * 10000) + 1;
  //   const newSnippet = {
  //     id,
  //     ...snippet,
  //   };
  //   const snippets = [...this.state.snippets];
  //   snippets.push(newSnippet);
  //   this.setState({
  //     snippets,
  //     newSnippet: "",
  //   });
  // };

  // deleteSnippet = (id) => {
  //   const list = [...this.state.snippets];
  //   const updatedList = list.filter((i) => i.id !== id);
  //   this.setState({
  //     snippets: updatedList,
  //   });
  // };
  const handleRemove = (id) => {
    var index = btns.indexOf(id);
    if (index !== -1) {
      setbtns((oldArray) => oldArray.splice(index, 1));
    }
  };

  return (
    <Router>
      <div className="container">
        <div className="header">
          <Header
            showAddSnippet={showAddSnippet}
            addSnippetButton={addSnippetButton}
          />
        </div>
        {/* {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>} */}
        <div className="base">
          <Base
            snippets={snippetCopy}
            btns={btns}
            snippetsCat={snippets}
            prism={usePrismHighlightAll}
            btns={btns}
            addCategory={addCategory}
            addCategoryText={addCategoryText}
            isLoading={isLoading}
            error={error}
            deleteBtn={deleteBtn}
            showAddSnippet={showAddSnippet}

            // handleBtns={handleBtns}
          />
        </div>
        {/* <div className="sidebar">
          <Sidebar
            btns={btns}
            snippets={snippetCopy}
            snippetsCat={snippets}
            isLoading={isLoading}
            error={error}
            // handleBtns={handleBtns}
            // onDelete={this.deleteSnippet}
          />
        </div> */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
