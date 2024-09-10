const MessagesList = ({ messages }) => {
  return (
    <div>
      <h2>Список сообщений:</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesList;