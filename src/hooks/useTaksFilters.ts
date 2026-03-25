import { useState, useEffect } from 'react'
import type { TasksList } from '../types/types'

export function useTaskFilters(tasks: TasksList | null) {
	const [filteredTasks, setFilteredTasks] = useState<TasksList | null>(null)
	const [activeFilter, setActiveFilter] = useState<string>('all')

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

	useEffect(() => {
		getFilteredTasks(activeFilter);
	}, [tasks, activeFilter])

	return {
		activeFilter,
		setActiveFilter,
		filteredTasks
	}
}