export type TasksPesponse = {
	[key: string]: {
		text: string,
		done: boolean
	}
}

export type FilterType = 'all' | 'active' | 'done';

export type TaskItem = {
	id: string
	text: string
	done: boolean
}

export type TasksList = Array<TaskItem>
