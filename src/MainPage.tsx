import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Statistic } from './components/statistic/Statistic'
import styles from './MainPage.module.css'

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			<Statistic/>
			<Footer/>
		</div>
	)
}
