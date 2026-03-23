import styles from './Header.module.css'

export const Header = () => {
	return (
		<div className={styles.header}>
			<h1>Чек-лист дел 1</h1>
			<p>Добавляйте, редактируйте, удаляйте и отмечайте выполненные дела</p>
		</div>
	)
}
