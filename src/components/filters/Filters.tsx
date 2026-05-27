import useTasksStore from '../../store/useTasksStore';
import type { FilterType } from '../../types/types';
import styles from './Filters.module.css'
import clsx from 'clsx'


export const Filters = () => {
	const activeFilter = useTasksStore((state) => state.activeFilter);
	const setActiveFilter = useTasksStore((state) => state.setActiveFilter);
	const filterButtonName: { key: FilterType; name: string }[] = [
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

	const handleActiveFilter = (filterType: FilterType) => {
		setActiveFilter(filterType)
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


