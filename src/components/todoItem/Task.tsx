import { IoPencilSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { useState, type ChangeEvent } from "react";
import styles from './Task.module.css'
import type { TaskItem } from "../../types/types";
import clsx from "clsx";

type Props = {
	task: TaskItem
	onEdit: (id: string, text: string) => void
	onCheck: (id: string) => void
	onDelete: (id: string) => void
}

export const Task = ({ task, onEdit, onCheck, onDelete }: Props) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>(task.text)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const editItem = () => {
		setIsEdit(true)
	}

	const saveItem = () => {
		onEdit(task.id, inputValue)
		setIsEdit(false)
	}

	const checkItem = () => {
		onCheck(task.id)
	}

	const deleteItem = () => {
		onDelete(task.id)
	}

	const checkbox = clsx({
		[styles.checkbox]: true,
		[styles.none]: isEdit
	})

	const text = clsx({
		[styles.done]: task.done,
		[styles.none]: isEdit
	})

	const input = clsx({
		[styles.input]: true,
		[styles.none]: !isEdit
	})

	return (
		<div className={styles.item}>
			<input
				className={checkbox}
				type="checkbox"
				checked={task.done}
				onChange={checkItem}
			/>
			<span
				className={text}
			>{task.text}</span>
			<input
				className={input}
				value={inputValue}
				onChange={handleInputChange}
			/>
			<div className={styles.actions}>
				{isEdit ?
					<button
						className={styles.button}
						onClick={saveItem}
						disabled={inputValue === ''}>
						<IoIosSave />
					</button>
					:
					<IoPencilSharp
						className={styles.button}
						onClick={editItem}
					/>}
				<IoIosCloseCircle
					className={styles.button}
					onClick={deleteItem}
				/>
			</div>
		</div>
	)
}
