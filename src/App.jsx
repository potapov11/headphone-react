import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
