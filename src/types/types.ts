export type TasksPesponse = {
	[key: string]: {
		text: string,
		done: boolean
	}
}

export type TaskItem = {
	id: string
	text: string
	done: boolean
}

export type TasksList = Array<TaskItem>

export type UseTaskReturn = {
	tasks: TasksList | null
	addTask: (inputValue: string) => Promise<void>;
	editTask: (id: string, text: string) => void;
	checkTask: (id: string) => void;
	deleteTask: (id: string) => void;
}
