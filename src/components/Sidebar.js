import Snippets from "./Snippets";
import Categories from "./Categories";

const Sidebar = ({ snippets, onDelete, isLoading, error }) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {snippets && <Snippets snippets={snippets} onDelete={onDelete} />}
    </div>
  );
};

export default Sidebar;
