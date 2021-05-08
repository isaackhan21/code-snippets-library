import Snippets from "./Snippets";
import Categories from "./Categories";

const Sidebar = ({ snippets, onDelete }) => {
  return (
    <div>
      <Snippets snippets={snippets} onDelete={onDelete} />
    </div>
  );
};

export default Sidebar;
