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
  deleteBtn,
  staticButtons,
  deleteStaticButton,
}) => {
  const {
    data: snippetsFetch,
    isLoadingFetch,
    errorFetch,
  } = useFetch("https://react-snippet.herokuapp.com/api/snippets");
  const [snippetCopy, setSnippetCopy] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // const [showIntro, setShowIntro] = useState(true);
  const handleBtnsFetch = (e) => {
    let snippetCopy;
    if (e.target.value === "All") {
      setSnippetCopy(snippetsFetch);
      setShowSearch(true);
      setShowMessage(true);
    } else {
      setSnippetCopy(
        snippetsFetch.filter((snippet) => snippet.category === e.target.value)
      );
      setShowSearch(true);
      setShowMessage(true);
    }
  };

  // const showIntroTitle = () => {
  //   setShowIntro(false);
  // };
  return (
    <div className="home">
      {isLoadingFetch && <div>Loading...</div>}
      {errorFetch && <div>{errorFetch}</div>}
      {/* <Categories btns={btns} snippets={snippetsFetch} /> */}
      {/* {showIntro && <h3>Welcome to the Code Snippet Library!</h3>} */}
      {snippetsFetch && (
        <Snippets
          snippets={snippetCopy}
          btns={btns}
          handleBtnsFetch={handleBtnsFetch}
          showSearch={showSearch}
          deleteBtn={deleteBtn}
          showMessage={showMessage}
          staticButtons={staticButtons}
          deleteStaticButton={deleteStaticButton}
        />
      )}
    </div>
  );
};

export default Home;
