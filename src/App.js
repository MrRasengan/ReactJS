import "./App.css";
// Seminar1
import Greeting from "./components/Greeting";
import CurrentTime from "./components/CurrentTime";
import EventCard from "./components/EventCard";
// Seminar2
import Counter from "./components/Counter";
import TextInput from "./components/Textinput";
import TodoList from "./components/Todolist";
import Timer from "./components/Timer";
// Seminar3
import Greeting2 from "./components/Greeting2";
import MessagesList from "./components/MessagesList";
import Counter2 from "./components/Counter2";
import TextDisplayForm from "./components/TextDisplayForm";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
		{ id: 1, text: 'Привет, как дела?' },
		{ id: 2, text: 'Отлично, спасибо!' },
		{ id: 3, text: 'Что нового?' },
		{ id: 4, text: 'Все хорошо, работаю над проектом' },
	];

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
			<Counter/>
			<br></br>
			<TextInput/>
			<br></br>
			<TodoList/>
			<br></br>
			<Timer/>

			<p className="less">Семинар 3</p>
			<Greeting2 name="Иван" />
			<br></br>
			<Counter2/>
			<br></br>
			<MessagesList messages={messages} />
			<br></br>
			<TextDisplayForm/>
			<br></br>
			<ThemeSwitcher/>


		</div>
	);
};

export default App;