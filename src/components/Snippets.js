import SnippetPreview from "./SnippetPreview";

const Snippets = ({ snippets, onDelete }) => {
  return (
    <>
      {snippets.map((snippet) => (
        <SnippetPreview
          key={snippet.id}
          snippet={snippet}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Snippets;
