import type { TasksPesponse } from "../types/types"

const url = "https://vue-with-http-6c4e8-default-rtdb.europe-west1.firebasedatabase.app/"

export const getTasksApi = (): Promise<TasksPesponse> => {
	const response = fetch(`${url}tasks.json`).then(res => res.json())

	return response
}

export const addTaskApi = async (inputValue: string) => {
	const newTask = {
		text: inputValue,
		done: false
	}

	const response = await fetch(`${url}tasks.json`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newTask)
	})

	const result = await response.json()
	const firebaseId = result.name

	return {
		id: firebaseId,
		...newTask
	}
}