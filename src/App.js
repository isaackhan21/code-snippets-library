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
