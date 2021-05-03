import Snippets from "./Snippets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddSnippet from "./AddSnippet";

const Base = () => {
  return (
    <div class="base">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <AddSnippet />
        </Route>
      </Switch>
    </div>
  );
};

export default Base;
