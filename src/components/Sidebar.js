import Snippets from "./Snippets";
import Categories from "./Categories";

const Sidebar = ({
  snippets,
  onDelete,
  isLoading,
  error,
  snippetsCat,
  btns,
}) => {
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/* {snippets && <Snippets snippets={snippets} onDelete={onDelete} />} */}
      {/* {snippetsCat && (
        <Categories
          snippets={snippets}
          snippetsCat={snippetsCat}
          onDelete={onDelete}
          // handleBtns={handleBtns}
          btns={btns}
        />
      )} */}
    </div>
  );
};

export default Sidebar;
