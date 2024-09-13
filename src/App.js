import "./App.css";
// Seminar1
import Greeting from "./components/seminar1/Greeting";
import CurrentTime from "./components/seminar1/CurrentTime";
import EventCard from "./components/seminar1/EventCard";
// Seminar2
import Counter from "./components/seminar2/Counter";
import TextInput from "./components/seminar2/Textinput";
import TodoList from "./components/seminar2/Todolist";
import Timer from "./components/seminar2/Timer";
// Seminar3
import Greeting2 from "./components/seminar3/Greeting2";
import MessagesList from "./components/seminar3/MessagesList";
import Counter2 from "./components/seminar3/Counter2";
import TextDisplayForm from "./components/seminar3/TextDisplayForm";
import ThemeSwitcher from "./components/seminar3/ThemeSwitcher";
// Seminar4
import Box from "./components/seminar4/Box";
import List from "./components/seminar4/List";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/seminar4/HomePage';
import AboutPage from './components/seminar4/AboutPage';
import ListPage from './components/seminar4/ListPage';
import DetailPage from './components/seminar4/DetailPage';

const App = () => {
	const events = [
		{
			title: "Концерт классической музыки",
			date: "2023-06-15",
			location: "Большой зал филармонии",
		},
		{
			title: "Семинар по технологии блокчейн",
			date: "2023-07-20",
			location: 'Конференц-зал отеля "Hilton"',
		},
		{
			title: "Фестиваль современного искусства",
			date: "2023-08-01",
			location: 'Галерея "Артхаус"',
		},
	];

	const messages = [
		{ id: 1, text: "Привет, как дела?" },
		{ id: 2, text: "Отлично, спасибо!" },
		{ id: 3, text: "Что нового?" },
		{ id: 4, text: "Все хорошо, работаю над проектом" },
	];

	const AnotherComponent = () => {
		return (
			<div>
				<h3>Другой компонент внутри Box</h3>
				<p>Теперь этот компонент обернут в Box.</p>
			</div>
		);
	};

	// Функция для отображения списка цветов
  const renderColorList = () => {
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Violet'];
    return colors.map((color) => (
      <span
        style={{
          color,
          marginRight: '10px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        {color}
      </span>
    ));
  };

  // Функция для отображения списка пользователей
  const renderUserList = () => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
    ];
    return users.map((user) => (
      <div
        key={user.id}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <img
          src={`https://via.placeholder.com/50?text=${user.name.charAt(0)}`}
          alt={user.name}
          style={{ marginRight: '10px' }}
        />
        <span>{user.name}</span>
      </div>
    ));
  };

	return (
		<div className="App">

			<p className="less">Семинар 1</p>
			<Greeting />
			<CurrentTime />
			<h1>Предстоящие события</h1>
			<div className="event-list">
				{events.map((event, index) => (
					<EventCard key={index} title={event.title} date={event.date} location={event.location} />
				))}
			</div>

			<p className="less">Семинар 2</p>
			<Counter />
			<br></br>
			<TextInput />
			<br></br>
			<TodoList />
			<br></br>
			<Timer />

			<p className="less">Семинар 3</p>
			<Greeting2 name="Иван" />
			<br></br>
			<Counter2 />
			<br></br>
			<MessagesList messages={messages} />
			<br></br>
			<TextDisplayForm />
			<br></br>
			<ThemeSwitcher />

			<p className="less">Семинар 4</p>
			<br></br>
			<Box>
				<h2>Текст в Box</h2>
				<p>Это пример использования компонента Box.</p>
			</Box>

			<Box>
				<img src="https://picsum.photos/200/300" alt="Случайное изображение" style={{ maxWidth: "100%" }} />
			</Box>

			<Box>
				<AnotherComponent />
			</Box>
			<br></br>

			<h2>Список цветов</h2>
      <List render={renderColorList} />
      <h2>Список пользователей</h2>
      <List render={renderUserList} />
			<br></br>

			<Router>
      <div>
        <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
		<br></br>

		<Router>
      <div>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
		<br></br>



	</div>
	);
};



export default App;
