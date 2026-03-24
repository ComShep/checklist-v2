import { Task } from '../todoItem/Task'
import styles from './TodoList.module.css'
import type { TasksList } from '../../types/types'

type Props = {
	tasks: TasksList | null,
	onCheck: (id: string, currentDone: boolean) => void,
	onDelete: (id: string) => void
	onEdit: (id: string, text: string) => void
}

export const TodoList = ({tasks, onCheck, onDelete, onEdit}: Props) => {


	if (tasks === null) {
		return <div className={styles.empty}>
			<h3>Загрузка...</h3>
		</div>
	}

	if (tasks.length === 0) {
		return <div className={styles.empty}>
			<h3>Список дел пуст</h3>
			<p>Добавьте первое дело, используя поле выше</p>
		</div>
	}

	return (
		<div className={styles.wrapper}>
			{tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onCheck={onCheck}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</div>
	)
}
