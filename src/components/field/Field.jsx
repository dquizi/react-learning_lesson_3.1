import styles from './field.module.css'
import PropTypes from 'prop-types';

const FieldLayout = ({ field, clickField }) => {

	return (
		<div className={styles.field}>
			{
				field.map((el, index) => {
					return <button key={index} className={styles.cell} onClick={() => clickField(index)}>{el}</button>
				})
			}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.string,
}

export const Field = ({ field, setField, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw }) => {

	const clickField = (index) => {
		const newArr = field.slice();

		if (!isGameEnded && !newArr[index]) {
			newArr[index] = currentPlayer;
			setField(newArr);

			const checkWinner = (newArr, currentPlayer) => {
				return WIN_PATTERNS.some(pattern =>
					newArr[pattern[0]] === currentPlayer &&
					newArr[pattern[1]] === currentPlayer &&
					newArr[pattern[2]] === currentPlayer);
			};

			checkWinner(newArr, currentPlayer) ? setIsGameEnded(true) : setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}

		const checkFullField = (newArr) => {
			return newArr.every(cell => cell);
		};

		if (!isGameEnded && checkFullField(newArr)) {
			setIsDraw(true);
			console.log('НИЧЬЯ');
		}
	};

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	return <FieldLayout field={field} clickField={clickField} />;
};
