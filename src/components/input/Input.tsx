import { useState, type ChangeEvent } from 'react'

import styles from './Input.module.css'

type Props = {
	onAdd: (inputValue: string) => void
}

export const Input = ({onAdd}: Props) => {
	const [inputValue, setInputValue] = useState<string | undefined>('')

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const handleAddNewTask = () => {
		if (inputValue !== undefined) {
			onAdd(inputValue)
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
				disabled={false}
				onClick={handleAddNewTask}>Добавить</button>
		</div>
	)
}
