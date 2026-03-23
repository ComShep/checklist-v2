import styles from './Input.module.css'

export const Input = () => {
	return (
		<div className={styles.input}>
			<input
				value={0}
				onChange={() => {}}
				placeholder='Добавьте новое дело...'

			/>
			<button
				disabled={false}
				onClick={() => {}}>Добавить</button>
		</div>
	)
}
