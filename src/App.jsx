import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="container">
				<Header count={count} />
				<div className="headphone-container">
					<Card setCount={setCount} />
				</div>
			</div>
		</>
	);
}

export default App;
