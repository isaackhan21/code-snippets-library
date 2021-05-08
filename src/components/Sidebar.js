import Snippets from "./Snippets";
import Categories from "./Categories";

const Sidebar = ({ snippets }) => {
  return (
    <div>
      <Snippets snippets={snippets} />
    </div>
  );
};

export default Sidebar;
