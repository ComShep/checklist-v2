import { useEffect, useState } from 'react'
import { Task } from '../todoItem/Task'
import styles from './TodoList.module.css'
import type { TasksList } from '../../types/types'

const tasksList = [
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
	const [tasks, setTasks] = useState<TasksList | null>(null)

	useEffect(() => {
		setTasks(tasksList)
	}, [])

	const editTask = (id: string, text: string) => {
		if (tasks !== null) {
			setTasks(tasks.map(task => {
				if (task.id === id) {
					return { ...task, text: text}
				}
				return task
			}))
		}
	}

	const checkTask = (id: string) => {
		if (tasks !== null) {
			setTasks(tasks.map(task => {
				if (task.id === id) {
					return { ...task, done: !task.done}
				}
			return task
			}))
		}
	}

	const deleteTask = (id: string) => {
		if (tasks !== null) {
			setTasks(tasks?.filter(task => task.id !== id))
		} 
	}

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
