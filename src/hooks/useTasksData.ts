import { useEffect } from 'react'
import useTasksStore from '../store/useTasksStore';

export function useTasksData() {
	const tasks = useTasksStore((state) => state.tasks);
	const activeFilter = useTasksStore((state) => state.activeFilter);
	const filteredTasks = useTasksStore((state) => state.filteredTasks);
	const loadData = useTasksStore((state) => state.loadData);
	const getFilteredTasks = useTasksStore((state) => state.getFilteredTasks);

	useEffect(() => {
		loadData();
	}, [])

	useEffect(() => {
		getFilteredTasks();
	}, [tasks, activeFilter, getFilteredTasks])

	return {
		tasks: filteredTasks
	}
}