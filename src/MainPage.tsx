import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { Statistic } from './components/statistic/Statistic'
import { TodoList } from './components/todoList/TodoList'
import styles from './MainPage.module.css'
import { Filters } from './components/filters/Filters'

export const MainPage = () => {

	return (
		<div className={styles.wrapper}>
			<Header />
			<Statistic/>
			<Filters/>
			<Input/>
			<TodoList/>
			<Footer />
		</div>
	)
}
