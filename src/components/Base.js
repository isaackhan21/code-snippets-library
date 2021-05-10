import Snippets from "./Snippets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddSnippet from "./AddSnippet";
import SnippetDetail from "./SnippetDetail";

const Base = ({ snippets, onAdd }) => {
  return (
    <div className="base">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <AddSnippet snippets={snippets} onAdd={onAdd} />
        </Route>
        {/* <Route exact path="/snippets">
          <Snippets snippets={snippets} />
        </Route> */}
        <Route exact path="/snippets/:id">
          <SnippetDetail snippets={snippets} />
        </Route>
      </Switch>
    </div>
  );
};

export default Base;
