import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<button onClick={updateCount}>Нажми</button>
			<span>Нажал {count} раз</span>
		</div>
	);
}

export default Counter;
