import styles from './Filters.module.css'
import clsx from 'clsx'

type Props = {
	activeFilter: string;
	onSetActiveFilter: (activeFilter: string) => void
}

export const Filters = ({ activeFilter, onSetActiveFilter }: Props) => {

	const filterButtonName = [
		{
			key: 'all',
			name: 'Все дела'
		},
		{
			key: 'active',
			name: 'Активные'
		},
		{
			key: 'done',
			name: 'Выполненные'
		},
	]

	const handleActiveFilter = (filterName: string) => {
		onSetActiveFilter(filterName)
	}

	return (
		<div className={styles.filters}>
			{filterButtonName.map(btn => {
				const btnClass = clsx(styles.btn, {
					[styles.active]: activeFilter === btn.key
				})
				return (
					<button
						className={btnClass}
						key={btn.key}
						onClick={() => handleActiveFilter(btn.key)}
					>{btn.name}
					</button>
				)
			})}
		</div>
	)
}


