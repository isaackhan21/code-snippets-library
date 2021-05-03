import { useParams } from "react-router-dom";
import Highlight from "react-highlight.js";

const SnippetDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <Highlight>
        <h1>Snippet Detail: {id}</h1>
      </Highlight>
    </div>
  );
};

export default SnippetDetail;
