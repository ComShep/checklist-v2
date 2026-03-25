import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import styles from './MainPage.module.css'
import { useTasks } from './hooks/useTasks'
import { Filters } from './components/filters/Filters'

export const MainPage = () => {
	const {
		tasks,
		filteredTasks,
		addTask, 
		editTask, 
		checkTask, 
		deleteTask, 
		activeFilter, 
		setActiveFilter, 
	} = useTasks();

	return (
		<div className={styles.wrapper}>
			<Header />
			<Statistic
				tasks={tasks}
			/>
			<Filters
				activeFilter={activeFilter}
				onSetActiveFilter={setActiveFilter}
			/>
			<Input
				onAdd={addTask}
			/>
			<TodoList
				tasks={filteredTasks}
				onCheck={checkTask}
				onDelete={deleteTask}
				onEdit={editTask} />
			<Footer />
		</div>
	)
}
