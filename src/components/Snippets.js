import SnippetPreview from "./SnippetPreview";

const Snippets = ({ snippets }) => {
  return (
    <>
      {snippets.map((snippet) => (
        <SnippetPreview key={snippet.id} snippet={snippet} />
      ))}
    </>
  );
};

export default Snippets;
