import Header from '../Header/Header';
import { CardFromLocalStorage } from '../CardFromLocal/CardFromLocal';

export default function Cart({ count }) {
	console.log(count);
	return (
		<>
			<Header count={count} />
			<div className="container">
				<h1>Это корзина</h1>
				<CardFromLocalStorage />
			</div>
		</>
	);
}
