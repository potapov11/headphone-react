import { useEffect, useState } from 'react';
import { headphones } from '../../assets/constant.js';
import { images } from '../Card/Card';

export function CardFromLocalStorage({ setCount }) {
	const [stateArr, setStateArr] = useState([]);
	console.log(headphones);

	useEffect(() => {
		const localData = localStorage.getItem('localArr');
		if (localData) {
			const localArr = JSON.parse(localData);
			const filteredData = headphones.filter((item) => localArr.includes(item.id));
			setStateArr(filteredData);
		}
	}, []);

	console.log(stateArr);
	// остальной код
	const newHeadphones = stateArr.map((headphoneItem, index) => {
		const numId = Number(headphoneItem.id);
		return (
			<div className="card" key={headphoneItem.id}>
				<div className="card__img-wrapper">
					<img className="card__img" src={images[numId]} alt="headphone-img" />
				</div>
				<div className="card__text-wrapper">
					<p className="card__text">{headphoneItem.title}</p>
					<p className="card__price">{headphoneItem.price + ' ₽'}</p>
				</div>
				<div className="card__subtext-wrapper card__text-wrapper">
					<p className="card__rating">{headphoneItem.rating}</p>
					{/* <p className="card__buy-text" onClick={() => handleBuyClick(headphoneItem.id)}>
						Купить
					</p> */}
				</div>
			</div>
		);
	});
	return <>{newHeadphones}</>;
}
