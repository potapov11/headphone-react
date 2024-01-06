import headphones from '../data';
import './Card.css';
import img0 from '../../assets/img/image-1.jpg';
import img11 from '../../assets/img/image-1.jpg';
import img1 from '../../assets/img/image-2.jpg';
import img2 from '../../assets/img/image-3.jpg';
import img3 from '../../assets/img/image-4.jpg';
import img4 from '../../assets/img/image-5.jpg';
import img5 from '../../assets/img/image-6.jpg';
import img6 from '../../assets/img/image-7.jpg';
import img7 from '../../assets/img/image-8.jpg';
import img10 from '../../assets/img/image-8.jpg';
import img8 from '../../assets/img/image-9.jpg';
import img9 from '../../assets/img/image-9.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

// import img from '../../assets/img/image-1.jpg';

export default function Card({ setCount }) {
	function handleBuyClick() {
		setCount((prevCount) => prevCount + 1);
	}

	console.log(headphones);
	const newHeadphones = headphones.map((headphoneItem, index) => {
		return (
			<div className="card" key={headphoneItem.id}>
				<div className="card__img-wrapper">
					<img className="card__img" src={images[index]} alt="headphone-img" />
				</div>
				<div className="card__text-wrapper">
					<p className="card__text">{headphoneItem.title}</p>
					<p className="card__price">{headphoneItem.price + ' ₽'}</p>
				</div>
				<div className="card__subtext-wrapper card__text-wrapper">
					<p className="card__rating">{headphoneItem.rating}</p>
					<p className="card__buy-text" onClick={handleBuyClick}>
						Купить
					</p>
				</div>
			</div>
		);
	});
	return <>{newHeadphones}</>;
}
