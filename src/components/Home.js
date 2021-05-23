import Categories from "./Categories";
import Snippets from "./Snippets";
import useFetch from "../useFetch";
import { useState } from "react";

const Home = ({
  snippets,
  snippetsCat,
  btns,
  handleBtns,
  isLoading,
  error,
}) => {
  const {
    data: snippetsFetch,
    isLoadingFetch,
    errorFetch,
  } = useFetch("http://localhost:8000/snippets");
  const [snippetCopy, setSnippetCopy] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const handleBtnsFetch = (e) => {
    let snippetCopy;
    if (e.target.value === "All") {
      setSnippetCopy(snippetsFetch);
      setShowSearch(true);
    } else {
      setSnippetCopy(
        snippetsFetch.filter((snippet) => snippet.category === e.target.value)
      );
      setShowSearch(true);
    }
  };
  return (
    <div className="home">
      {isLoadingFetch && <div>Loading...</div>}
      {errorFetch && <div>{errorFetch}</div>}
      {/* <Categories btns={btns} snippets={snippetsFetch} /> */}
      {snippetsFetch && (
        <Snippets
          snippets={snippetCopy}
          btns={btns}
          handleBtnsFetch={handleBtnsFetch}
          showSearch={showSearch}
        />
      )}
    </div>
  );
};

export default Home;
