import { useState, useEffect } from 'react'
import type { TasksList, UseTaskReturn } from '../types/types';
import { addTaskApi, deleteTaskApi, getTasksApi, toggleTask } from '../api/api';


export function useTasks(): UseTaskReturn {
	const [tasks, setTasks] = useState<TasksList | null>(null)

	useEffect(() => {
		loadData();
	}, [])

	const loadData = async () => {
		try {
			const data = await getTasksApi();
			const arrayOfData = Object.entries(data)
			const arrayOfTasks = arrayOfData.map(([id, task]) => ({
				id: id,
				...task
			}))
			setTasks(arrayOfTasks)
		} catch (err) {
			console.log(err)
		}


	}

	const addTask = async (inputValue: string) => {

		const newTask = await addTaskApi(inputValue)

		if (tasks !== null) {
			setTasks([...tasks, newTask])
		} else {
			setTasks([newTask])
		}
	}

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

	const checkTask = async (id: string, currentDone: boolean) => {
		if (tasks !== null) {
			const prevTasks = [...tasks]
			try {
				await toggleTask(id, currentDone)
				setTasks(tasks.map(task => {
					if (task.id === id) {
						return { ...task, done: !task.done }
					}
					return task
				}))
			} catch (err) {
				setTasks(prevTasks)
				console.log(err)
			}
		}
	}

		const deleteTask = async (id: string) => {
			if (tasks !== null) {
				try {
					await deleteTaskApi(id)
					setTasks(tasks.filter(task => task.id !== id))
				} catch (err) {
					console.log(err)
				}
			}
		}

		return {
			tasks,
			addTask,
			editTask,
			checkTask,
			deleteTask
		}
	}
