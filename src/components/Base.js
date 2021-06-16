import Snippets from "./Snippets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddSnippet from "./AddSnippet";
import SnippetDetail from "./SnippetDetail";
import EditSnippet from "./EditSnippet";
import ErrorPage from "./ErrorPage";

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
  deleteBtn,
  showAddSnippet,
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
            deleteBtn={deleteBtn}
          />
        </Route>
        <Route exact path="/create">
          <AddSnippet
            snippets={snippets}
            snippetsCat={snippetsCat}
            onAdd={onAdd}
            btns={btns}
            addCategory={addCategory}
            addCategoryText={addCategoryText}
            showAddSnippet={showAddSnippet}
          />
        </Route>
        <Route path="/create/edit/:id">
          <EditSnippet />
        </Route>
        {/* <Route exact path="/snippets"> */}
        {/* {snippets && <Snippets snippets={snippets} />} */}
        {/* </Route> */}
        <Route exact path="/snippets/:id">
          <SnippetDetail snippets={snippets} prism={prism} />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Base;
