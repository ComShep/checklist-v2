import type { UseTaskReturn } from '../types/types';
import { useTasksData } from './useTasksData';
import { useTaskFilters } from './useTaksFilters';
import { useTaskOperation } from './useTaskOperations';

export function useTasks(): UseTaskReturn {
	const { tasks, setTasks } = useTasksData();
	const { activeFilter, setActiveFilter, filteredTasks} = useTaskFilters(tasks)
	const {	addTask, editTask, checkTask, deleteTask} = useTaskOperation({ tasks, setTasks })

	return {
		tasks,
		filteredTasks,
		addTask,
		editTask,
		checkTask,
		deleteTask,
		activeFilter,
		setActiveFilter,
	}
}
