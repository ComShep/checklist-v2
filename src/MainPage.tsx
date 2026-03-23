import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import styles from './MainPage.module.css'

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			<Statistic/>
			<Input/>
			<TodoList/>
			<Footer/>
		</div>
	)
}
