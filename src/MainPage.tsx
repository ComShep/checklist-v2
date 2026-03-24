import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import styles from './MainPage.module.css'
import { useTasks } from './hooks/useTasks'

export const MainPage = () => {
	const {tasks, addTask, editTask, checkTask, deleteTask} = useTasks();

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
