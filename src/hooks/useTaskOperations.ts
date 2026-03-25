import { addTaskApi, deleteTaskApi, editTaskApi, toggleTaskApi } from '../api/api';
import type { TasksList } from '../types/types';

type Props = {
	tasks: TasksList | null
	setTasks: (tasks: TasksList | null) => void;
}

export function useTaskOperation ({tasks, setTasks}: Props) {

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
	
	return {
		addTask,
		editTask,
		checkTask,
		deleteTask
	}
}