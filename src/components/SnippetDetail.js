import { useParams } from "react-router-dom";

const SnippetDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Snippet Detail: {id}</h1>
    </div>
  );
};

export default SnippetDetail;
