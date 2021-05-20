import Snippets from "./Snippets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddSnippet from "./AddSnippet";
import SnippetDetail from "./SnippetDetail";

const Base = ({
  snippets,
  onAdd,
  prism,
  btns,
  addCategory,
  addCategoryText,
  snippetsCat,
  isLoading,
  error,
  handleBtns,
}) => {
  return (
    <div className="base">
      <Switch>
        <Route exact path="/">
          <Home
            snippets={snippets}
            btns={btns}
            snippetsCat={snippetsCat}
            handleBtns={handleBtns}
            isLoading={isLoading}
            error={error}
          />
        </Route>
        <Route path="/create">
          <AddSnippet
            snippets={snippets}
            snippetsCat={snippetsCat}
            onAdd={onAdd}
            btns={btns}
            addCategory={addCategory}
            addCategoryText={addCategoryText}
          />
        </Route>
        {/* <Route exact path="/snippets"> */}
        {/* {snippets && <Snippets snippets={snippets} />} */}
        {/* </Route> */}
        <Route exact path="/snippets/:id">
          <SnippetDetail snippets={snippets} prism={prism} />
        </Route>
      </Switch>
    </div>
  );
};

export default Base;
