import { useState, useEffect } from 'react'
import type { TasksList } from '../types/types';
import { getTasksApi } from '../api/api';

export function useTasksData() {
	const [tasks, setTasks] = useState<TasksList | null>(null)

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

	useEffect(() => {
		loadData();
	}, [])

	return {
		tasks,
		setTasks
	}
}