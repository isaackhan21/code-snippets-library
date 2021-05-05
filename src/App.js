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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: categoriesDatabase,
      snippets: snippetDatabase,
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="base">
            <Base snippets={this.state.snippets} />
          </div>
          <div className="sidebar">
            <Sidebar />
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
