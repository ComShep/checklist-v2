import type { TasksList } from '../../types/types'
import styles from './Statistic.module.css'

type Props = {
	tasks: TasksList | null
}

export const Statistic = ({tasks}: Props) => {
	const total = tasks === null ? 0 : tasks.length
	const completed = tasks === null ? 0 : (tasks.filter(task => task.done === true)).length; 
	const active = total - completed;


	return (
		<div className={styles.stats}>
			<div className={styles.item}>
				<div className={styles.value}>{total}</div>
				<div className={styles.label}>Всего дел</div>
			</div>
			<div className={styles.item}>
				<div className={styles.value}>{completed}</div>
				<div className={styles.label}>Осталось</div>
			</div>
			<div className={styles.item}>
				<div className={styles.value}>{active}</div>
				<div className={styles.label}>Выполнено</div>
			</div>
		</div>
	)
}
