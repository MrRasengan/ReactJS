const Box = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        marginBottom: '20px',
      }}
    >
      {children}
    </div>
  );
};

export default Box;