const SnippetDetailItems = ({ snippets, id }) => {
  const currentItems = snippets
    .filter((i) => i.id === id)
    .map((i) => <div>{i.title}</div>);
  return <div>{currentItems}</div>;
};

export default SnippetDetailItems;
