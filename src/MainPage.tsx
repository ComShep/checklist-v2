import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import styles from './MainPage.module.css'

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			<Footer/>
		</div>
	)
}
