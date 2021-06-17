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
  const [project, setProject] = useState("");
  const [snippet, setSnippet] = useState("");
  const [category, setCategory] = useState(btns[0]);
  const [isDropDown, setIsDropdown] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const snippets = { title, description, snippet, project, category };

    if (isDropDown) {
      addCategory(category);
    } else {
      addCategoryText(category);
    }

    setIsLoading(true);

    fetch("https://react-snippet.herokuapp.com/api/snippets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippets),
    }).then(() => {
      setIsLoading(false);
      history.push("/");
    });

    // setTitle("");
    // setDescription("");
    // setSnippet("");
  };

  const buttons = btns.slice(1);

  return (
    <div>
      <div className="form-page">
        {/* <div className="top-buttons"> */}
        {/* <div className="go-back-btn">
            <Button
              className="cat-btn"
              color="red"
              text="Go Back"
              onClick={history.goBack}
            />
          </div> */}
        {/* <div className="cat-input-btn">
            <Button
              text={isDropDown ? "Create Category" : "Select Category"}
              color="blue"
              onClick={() => setIsDropdown(!isDropDown)}
            />
          </div> */}
        {/* </div> */}
        <div className="snippet-form">
          <div className="form-inputs">
            <form onSubmit={onSubmit}>
              <h1 className="add-snippet-title">Add Snippet</h1>
              <div className="top-inputs">
                <div className="title-cat">
                  <div className="title">
                    <label className="label">Add Snippet Title</label>
                    <input
                      className="input-title"
                      type="text"
                      placeholder="Add Snippet Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="categories-add">
                    <div
                      className="cat-input-btn"
                      onClick={() => setIsDropdown(!isDropDown)}
                    >
                      <p>
                        {isDropDown ? "Create Category" : "Select Category"}
                      </p>
                    </div>
                    {/* <Button
            text="Change"
            color="blue"
            onClick={() => setIsDropdown(!isDropDown)}
          /> */}
                    <div className="cats">
                      {isDropDown && (
                        <div className="category-dropdown">
                          <label className="label">Select Category</label>
                          <select
                            className="dropdown-input"
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
                          <label className="label">Create Category</label>
                          <input
                            className="create-cat"
                            type="text"
                            placeholder="Add Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="des-project">
                  <div className="description">
                    <label className="label">Description</label>
                    <textarea
                      className="textarea-des"
                      type="text"
                      placeholder="Add Snippet Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="project-name-div">
                    <label className="project-label" className="label">
                      Project Name (Not Required)
                    </label>
                    <input
                      className="project-name"
                      type="text"
                      placeholder="Add Project Name"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="snippet">
                <label className="label">Snippet</label>
                <textarea
                  className="textarea-snippet"
                  type="text"
                  placeholder="Add Snippet"
                  value={snippet}
                  onChange={(e) => setSnippet(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="form-button-div">
                {!isLoading && <Button text="Add Snippet" color="blue" />}
                {isLoading && <Button text="Add Snippet" color="blue" />}
              </div>
              {/* {isLoading && <button disabled>Adding snippet...</button>} */}
              {/* {!isPending && <input type="submit" value="Save Snippet" />}
      {isPending && <input disabled type="submit" value="Adding Snippet..." />} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSnippet;
