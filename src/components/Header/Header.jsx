import card from '../../assets/img/card-png.png';
import logo from '../../assets/img/logo-QPICK.svg';
import heart from '../../assets/img/heart-png.png';
import { useState } from 'react';
import './Header.css';

export default function Header({ count }) {
	return (
		<>
			<header>
				<div className="header-block">
					<img src={logo} alt="logo" />
					<div className="header-icons">
						<div className="icon-card-wrapper">
							<img className="icon-card" src={card} alt="cart-img"></img>
							<span className="icon-card-circle">{count}</span>
						</div>
						<img className="icon-heart" src={heart} alt="cart-img"></img>
					</div>
				</div>
			</header>
		</>
	);
}
