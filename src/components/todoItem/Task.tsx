import { IoPencilSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";
import styles from './Task.module.css'
import type { TaskItem } from "../../types/types";

type Props = {
	task: TaskItem
}


export const Task = ({task}: Props) => {
	const [isEdit, setIsEdit] = useState(false);
	const [inputValue, setInputValue] = useState(null)

	return (
		<div className={styles.item}>
				<input 
				// `todo-item-checkbox ${this.state.isEdit && 'none'}`
					className={styles.checkbox} 
					type="checkbox" 
					checked={task.done}
					onChange={() => {}}
				/>
				<span 
					className={task.done ? styles.done : ''}
				>{task.text}</span>
				{/* <input 
					className={`todo-item-input ${!this.state.isEdit && 'none'}`}
					value={}
					onChange={}
				/> */}
				<div className={styles.actions}>
					{isEdit ? 
						<IoIosSave 
							className={styles.button}
							onClick={() => {}}
						/> : 
						<IoPencilSharp 
							className={styles.button}
							onClick={() => {}}
						/>}
					<IoIosCloseCircle 
						className={styles.button}
						onClick={() => {}}
					/>
				</div>
			</div>
	)
}
