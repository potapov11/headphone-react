import { useState, useEffect } from 'react';
import { headphones } from '../../assets/constant';

const UseHeadphonesLS = () => {
	const [selectedHeadphonesIds, setSelectedHeadphonesIds] = useState([]);
	const [headphonesFromLS, setHeadphonesFromLS] = useState([]);

	useEffect(() => {
		const headphonesIdsFromLS = JSON.parse(localStorage.getItem('headphonesIds') || '[]');
		setSelectedHeadphonesIds(headphonesIdsFromLS);
	});

	useEffect(() => {
		const updateHeadphones = headphones.filter((item) => selectedHeadphonesIds.includes(item.id));
		setHeadphonesFromLS(updateHeadphones);
	}, [selectedHeadphonesIds]);

	const addHeadphoneIdToLS = (id) => {
		if (!selectedHeadphonesIds.includes(id)) {
			const updatedIds = [...selectedHeadphonesIds, id];
			setSelectedHeadphonesIds(updatedIds);
			localStorage.setItem('headphonesIds', JSON.stringify(updatedIds));
		}
	};

	const removeHeadphonesIdFromLs = (id) => {
		const updatedIds = selectedHeadphonesIds.filter((item) => item !== id);
		setSelectedHeadphonesIds(updatedIds);
		localStorage.setItem('headphonesIds', JSON.stringify(updatedIds));
	};

	return { headphonesFromLS, addHeadphoneIdToLS, removeHeadphonesIdFromLs, selectedHeadphonesIds };
};

export { UseHeadphonesLS };
