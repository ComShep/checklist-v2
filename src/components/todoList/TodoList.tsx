import { Task } from '../todoItem/Task'
import styles from './TodoList.module.css'

const tasks = [
	{
		id: "123e4567-e89b-12d3-a456-426614174000",
		text: "Купить продукты",
		done: true
	},
	{
		id: "123e4567-e89b-12d3-a456-426614174001",
		text: "Сделать домашнее задание",
		done: true
	},
	{
		id: "123e4567-e89b-12d3-a456-426614174002",
		text: "Позвонить маме",
		done: false
	},
	{
		id: "123e4567-e89b-12d3-a456-426614174003",
		text: "Закончить проект",
		done: false
	},
	{
		id: "123e4567-e89b-12d3-a456-426614174004",
		text: "Сходить в спортзал",
		done: true
	},
	{
		id: "123e4567-e89b-12d3-a456-426614174005",
		text: "Прочитать книгу",
		done: false
	},
]

export const TodoList = () => {

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
					// onCheck={() => {}}
					// onDelete={() => {}}
					// onEdit={() => {}}
				/>
			))}
		</div>
	)
}
