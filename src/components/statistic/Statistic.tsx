import styles from './Statistic.module.css'

export const Statistic = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.item}>
				<div className={styles.value}>0</div>
				<div className={styles.label}>Всего дел</div>
			</div>
			<div className={styles.item}>
				<div className={styles.value}>0</div>
				<div className={styles.label}>Осталось</div>
			</div>
			<div className={styles.item}>
				<div className={styles.value}>0</div>
				<div className={styles.label}>Выполнено</div>
			</div>
		</div>
	)
}
