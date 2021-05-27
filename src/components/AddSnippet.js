import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const AddSnippet = ({
  snippets,
  onAdd,
  btns,
  addCategory,
  addCategoryText,
  snippetsCat,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snippet, setSnippet] = useState("");
  const [category, setCategory] = useState("");
  const [isDropDown, setIsDropdown] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const snippets = { title, description, snippet, category };

    if (isDropDown) {
      addCategory(category);
    } else {
      addCategoryText(category);
    }

    setIsLoading(true);

    fetch("http://localhost:8000/snippets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippets),
    }).then(() => {
      console.log("w");
      setIsLoading(false);
      history.push("/");
    });

    // setTitle("");
    // setDescription("");
    // setSnippet("");
  };

  const buttons = btns.slice(1);

  return (
    <div className="snippet-form">
      <Button
        text={isDropDown ? "Create Category" : "Select Category"}
        color="blue"
        onClick={() => setIsDropdown(!isDropDown)}
      />
      <form onSubmit={onSubmit}>
        <h1>AddSnippet</h1>
        <div className="title">
          <input
            type="text"
            placeholder="Add Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="description">
          <label>Description</label>
          <textarea
            type="text"
            placeholder="Add Note Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="snippet">
          <label>Snippet</label>
          <textarea
            type="text"
            placeholder="Add Note"
            value={snippet}
            onChange={(e) => setSnippet(e.target.value)}
          />
        </div>
        <div className="categories">
          {/* <Button
            text="Change"
            color="blue"
            onClick={() => setIsDropdown(!isDropDown)}
          /> */}
          {isDropDown && (
            <div className="category-dropdown">
              <label>Select Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {btns.map((snippet, index) => (
                  <option
                    selected="selected"
                    key={index}
                    // value={snippet.category}
                  >
                    {/* {snippet.category} */}
                    {snippet}
                  </option>
                ))}
              </select>
            </div>
          )}
          {!isDropDown && (
            <div className="category-input">
              <label>Create Category</label>
              <input
                type="text"
                placeholder="Add Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          )}
        </div>

        {!isLoading && <Button text="Add Snippet" color="blue" />}
        {isLoading && <Button text="Add Snippet" color="blue" />}
        {/* {isLoading && <button disabled>Adding snippet...</button>} */}
        {/* {!isPending && <input type="submit" value="Save Snippet" />}
      {isPending && <input disabled type="submit" value="Adding Snippet..." />} */}
      </form>
    </div>
  );
};

export default AddSnippet;
