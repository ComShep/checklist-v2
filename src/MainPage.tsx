import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import type { TasksList } from './types/types'
import styles from './MainPage.module.css'
import { getTasks } from './api/api';

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

export const MainPage = () => {
	const [tasks, setTasks] = useState<TasksList | null>(null)
	const [tasksApi, setTasksApi] = useState<TasksList | null>(null)

	useEffect(() => {
		setTasks(tasksList)
	}, [])

	useEffect(() => {
		getTasks().then(data => {
			const arrayOfData = Object.entries(data)
			const arrayOfTasks = arrayOfData.map(([id, task]) => ({
				id: id,
				...task
			}))

			setTasksApi(arrayOfTasks)
		})

	}, [])

	const editTask = (id: string, text: string) => {
		if (tasks !== null) {
			setTasks(tasks.map(task => {
				if (task.id === id) {
					return { ...task, text: text }
				}
				return task
			}))
		}
	}

	const checkTask = (id: string) => {
		if (tasks !== null) {
			setTasks(tasks.map(task => {
				if (task.id === id) {
					return { ...task, done: !task.done }
				}
				return task
			}))
		}
	}

	const deleteTask = (id: string) => {
		if (tasks !== null) {
			setTasks(tasks.filter(task => task.id !== id))
		}
	}

	const addTask = (inputValue: string) => {
		const newTask = {
			id: uuidv4(),
			text: inputValue,
			done: false
		}
		if (tasks !== null) {
		setTasks([...tasks, newTask])
		} else {
			setTasks([newTask])
		}
	}

	return (
		<div className={styles.wrapper}>
			<Header />
			<Statistic 
				tasks={tasks}
			/>
			<Input 
				onAdd={addTask}
			/>
			<TodoList
				tasks={tasks}
				onCheck={checkTask}
				onDelete={deleteTask}
				onEdit={editTask} />
			<Footer />
		</div>
	)
}
