import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import AddSnippet from "./components/AddSnippet";
import Snippets from "./components/Snippets";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Base />

        <Sidebar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
