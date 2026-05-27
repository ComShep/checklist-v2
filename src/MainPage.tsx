import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import styles from './MainPage.module.css'
import { useTasks } from './hooks/useTasks'
import { Filters } from './components/filters/Filters'
import useTasksStore from './store/useTasksStore'
import { useEffect } from 'react'

export const MainPage = () => {
	const {
		// tasks,
		// filteredTasks,
		// addTask, 
		editTask, 
		// checkTask, 
		deleteTask, 
		// activeFilter, 
		// setActiveFilter, 
	} = useTasks();

	const tasks = useTasksStore((state) => state.tasks);
	const activeFilter = useTasksStore((state) => state.activeFilter);
	const filteredTasks = useTasksStore((state) => state.filteredTasks);
	const loadData = useTasksStore((state) => state.loadData);
	const getFilteredTasks = useTasksStore((state) => state.getFilteredTasks);

	const checkTask = useTasksStore((state) => state.checkTask); 

	useEffect(() => {
		loadData();
	}, [])

	useEffect(() => {
		getFilteredTasks();
	}, [tasks, activeFilter, getFilteredTasks])

	return (
		<div className={styles.wrapper}>
			<Header />
			<Statistic/>
			<Filters/>
			<Input/>
			<TodoList
				tasks={filteredTasks}
				onCheck={checkTask}
				onDelete={deleteTask}
				onEdit={editTask} />
			<Footer />
		</div>
	)
}
