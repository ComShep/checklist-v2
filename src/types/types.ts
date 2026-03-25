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
	tasks: TasksList | null;
	filteredTasks: TasksList | null;
	addTask: (inputValue: string) => Promise<void>;
	editTask: (id: string, text: string) => void;
	checkTask: (id: string, currentDone: boolean) => void;
	deleteTask: (id: string) => void;
	activeFilter: string;
	setActiveFilter: (activeFilter: string) => void
}
