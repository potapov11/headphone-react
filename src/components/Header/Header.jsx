import card from '../../assets/img/card-png.png';
import logo from '../../assets/img/logo-QPICK.svg';
import heart from '../../assets/img/heart-png.png';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Header.css';

export default function Header({ count }) {
	return (
		<header>
			<div className="header-block">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div className="header-icons">
					<Link to="/cart">
						<div className="icon-card-wrapper">
							<img className="icon-card" src={card} alt="cart-img"></img>
							<span className="icon-card-circle">{count}</span>
						</div>
					</Link>
					<img className="icon-heart" src={heart} alt="cart-img"></img>
				</div>
			</div>
		</header>
	);
}
