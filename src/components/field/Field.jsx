import styles from './field.module.css'

const FieldLayout = () => {
	const fields = [1, '2', '3', '4', '5', '6', '7', '8', '9'];

	return (
		<div className={styles.field}>
			{
				fields.map(field => {
					return <button key={field} className={styles.cell}></button>
				})
			}
		</div>
	);
};

export const Field = () => {

	return <FieldLayout />;
};
