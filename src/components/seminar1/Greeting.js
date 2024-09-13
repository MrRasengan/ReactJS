function Greeting () {
  const currentHour = new Date().getHours();

  let greetingMessage;
  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'Доброе утро';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = 'Добрый день';
  } else {
    greetingMessage = 'Добрый вечер';
  }

  return (
    <h1>{greetingMessage}, React!</h1>
  );
};

export default Greeting;