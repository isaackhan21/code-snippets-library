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

function App() {
  const { data: snippets, isLoading, error } = useFetch(
    "http://localhost:8000/snippets"
  );
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

  useEffect(() => {}, []);

  return (
    <Router>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        {/* {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>} */}
        <div className="base">
          <Base snippets={snippets} />
        </div>
        <div className="sidebar">
          <Sidebar
            snippets={snippets}
            isLoading={isLoading}
            error={error}
            // onDelete={this.deleteSnippet}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
