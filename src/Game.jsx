import { useState } from 'react'
import styles from './game.module.css'
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';

const GameLayout = ({ field, setField, currentPlayer, setCurrentPlayer, reset, isGameEnded, setIsGameEnded, isDraw, setIsDraw }) => {
	return (
		<div className={styles['game-layout']}>
			<h1>Крестики-Нолики</h1>
			<Information isGameEnded={isGameEnded} isDraw={isDraw} currentPlayer={currentPlayer} />
			<Field
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setField={setField}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw} />
			<button className={styles['restart-btn']} onClick={reset}>Начать сначала</button>
		</div >
	);
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	]);

	const reset = () => {
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return <GameLayout
		field={field}
		currentPlayer={currentPlayer}
		setCurrentPlayer={setCurrentPlayer}
		setField={setField}
		reset={reset}
		isGameEnded={isGameEnded}
		setIsGameEnded={setIsGameEnded}
		isDraw={isDraw}
		setIsDraw={setIsDraw} />;
};
