// import { useState } from 'react'
import styles from './game.module.css'
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';

const GameLayout = () => {
	return (
		<div className={styles['game-layout']}>
			<h1>Крестики-Нолики</h1>
			<Information />
			<Field />
			<button className={styles['restart-btn']}>Начать сначала</button>
		</div>
	);
};

export const Game = () => {
	// const [count, setCount] = useState(0);

	return <GameLayout />;
};

