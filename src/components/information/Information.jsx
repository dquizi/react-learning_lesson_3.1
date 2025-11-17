import styles from './information.module.css'

const InformationLayout = ({ isGameEnded, isDraw, currentPlayer }) => {
	return (
		<div className={styles.information}>
			{!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
			{isDraw && 'НИЧЬЯ'}
			{!isDraw && isGameEnded && `Победитель: ${currentPlayer}`}
		</div>
	)
};

export const Information = ({ isGameEnded, isDraw, currentPlayer }) => {

	return <InformationLayout isGameEnded={isGameEnded} isDraw={isDraw} currentPlayer={currentPlayer} />;
};

