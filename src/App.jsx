import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
// import Header from './components/Header/Header';
// import { Card } from './components/Card/Card';
import './App.css';

function App() {
	const localArr = JSON.parse(localStorage.getItem('localArr'));
	console.log(localArr, 'localArr App');

	const [count, setCount] = useState(localArr ? localArr.length : 0);
	console.log(count, ' count');

	return (
		<>
			<Routes>
				<Route path="/" element={<Home count={count} setCount={setCount} localArr={localArr} />} />
				<Route path="/cart" element={<Cart count={count} />} />
			</Routes>
		</>
	);
}

export default App;
