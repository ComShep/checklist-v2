import { useState, type ChangeEvent } from 'react'
import styles from './Input.module.css'
import useTasksStore from '../../store/useTasksStore'


export const Input = () => {
	const [inputValue, setInputValue] = useState<string | undefined>('');
	const addTask = useTasksStore((state) => state.addTask); 

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleAddNewTask = () => {
		if (inputValue !== undefined) {
			addTask(inputValue)
		}
		setInputValue('')
	}

	return (
		<div className={styles.input}>
			<input
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Добавьте новое дело...'

			/>
			<button
				disabled={inputValue?.length === 0}
				onClick={handleAddNewTask}>Добавить</button>
		</div>
	)
}
