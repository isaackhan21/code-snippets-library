import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AddSnippet = ({ snippets, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snippet, setSnippet] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const snippets = { title, description, snippet };

    setIsPending(true);

    fetch("http://localhost:8000/snippets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippets),
    }).then(() => {
      console.log("w");
      setIsPending(false);
    });

    // setTitle("");
    // setDescription("");
    // setSnippet("");
    history.push("/");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>AddSnippet</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Add Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Note Description</label>
        <input
          type="text"
          placeholder="Add Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form">
        <label>Content</label>
        <input
          type="text"
          placeholder="Add Note"
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
        />
      </div>

      <button>Add</button>
      {/* {!isPending && <input type="submit" value="Save Snippet" />}
      {isPending && <input disabled type="submit" value="Adding Snippet..." />} */}
    </form>
  );
};

export default AddSnippet;
