import Header from '../Header/Header';
import { Card } from '../Card/Card';
import { UseHeadphonesLS } from './components/UseHeadPhonesLS/UseHeadPhonesLS';

export default function Home({ count, setCount, localArr }) {
	const { selectedHeadphonesIds } = UseHeadphonesLS();
	const count = selectedHeadphonesIds.length;

	return (
		<>
			<Header count={count} />
			<div className="headphone-container">
				<Card setCount={setCount} localArr={localArr} />
			</div>
		</>
	);
}
