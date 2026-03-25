import { useState, useEffect } from 'react'
import type { TasksList, UseTaskReturn } from '../types/types';
import { addTaskApi, deleteTaskApi, editTaskApi, getTasksApi, toggleTaskApi } from '../api/api';

export function useTasks(): UseTaskReturn {
	const [tasks, setTasks] = useState<TasksList | null>(null)
	const [filteredTasks, setFilteredTasks] = useState<TasksList | null>(null)
	const [activeFilter, setActiveFilter] = useState<string>('all')

	useEffect(() => {
		loadData();
	}, [])

	useEffect(() => {
		getFilteredTasks(activeFilter);
	}, [tasks, activeFilter])

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

	const editTask = async (id: string, text: string) => {
		if (tasks !== null) {
			const prevTasks = [...tasks]
			try {
				await editTaskApi(id, text)
				setTasks(tasks.map(task => {
					if (task.id === id) {
						return { ...task, text: text }
					}
					return task
				}))
			} catch (err) {
				setTasks(prevTasks)
				console.log(err)
			}
		}
	}

	const checkTask = async (id: string, currentDone: boolean) => {
		if (tasks !== null) {
			const prevTasks = [...tasks]
			try {
				await toggleTaskApi(id, currentDone)
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

	const getFilteredTasks = async (activeFilter: string) => {
		if (!tasks) {
			setFilteredTasks(null)
			return
		}

		if (activeFilter === 'active') {
			console.log(tasks?.filter(task => !task.done))
			setFilteredTasks(tasks?.filter(task => !task.done))
		} else if (activeFilter === 'done') {
			console.log(tasks?.filter(task => task.done))
			setFilteredTasks(tasks?.filter(task => task.done))
		} else {
			setFilteredTasks(tasks)
		}
	}

	return {
		tasks,
		filteredTasks,
		addTask,
		editTask,
		checkTask,
		deleteTask,
		activeFilter,
		setActiveFilter,
		getFilteredTasks
	}
}
