import { Task } from '../todoItem/Task'
import styles from './TodoList.module.css'
import useTasksStore from '../../store/useTasksStore'
import { useTasksData } from '../../hooks/useTasksData'

export const TodoList = () => {
	const { tasks } = useTasksData();
	const checkTask = useTasksStore((state) => state.checkTask); 
	const editTask = useTasksStore((state) => state.editTask);
	const deleteTask = useTasksStore((state) => state.deleteTask); 

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
					onCheck={checkTask}
					onDelete={deleteTask}
					onEdit={editTask}
				/>
			))}
		</div>
	)
}
