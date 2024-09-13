const List = ({ render }) => {
  return (
    <ul>
      {render().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;