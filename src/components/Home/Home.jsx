import Header from '../Header/Header';
import { Card } from '../Card/Card';

export default function Home({ count, setCount, localArr }) {
	return (
		<>
			<Header count={count} />
			<div className="headphone-container">
				<Card setCount={setCount} localArr={localArr} />
			</div>
		</>
	);
}
