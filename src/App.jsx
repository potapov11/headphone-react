import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.css';

function Home({ count, setCount }) {
	return (
		<>
			<Header count={count} />
			<div className="headphone-container">
				<Card setCount={setCount} />
			</div>
		</>
	);
}

function App() {
	const localArr = JSON.parse(localStorage.getItem('localArr'));
	console.log(localArr);

	const [count, setCount] = useState(localArr ? localArr.length : 0);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home count={count} setCount={setCount} />} />
				<Route path="/cart" element={<Cart count={count} />} />
			</Routes>
		</>
	);
}

export default App;
