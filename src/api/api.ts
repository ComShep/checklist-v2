import type { TasksPesponse } from "../types/types"

const url = "https://vue-with-http-6c4e8-default-rtdb.europe-west1.firebasedatabase.app/"

// запрос списка задач
export const getTasksApi = async (): Promise<TasksPesponse> => {
	const response = await fetch(`${url}tasks.json`)
	const data = await response.json();

	return data
}

// запрос на добавление задачи
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

// запрос на удаление задачи
export const deleteTaskApi = async (id: string) => {
	const response = await fetch(`${url}tasks/${id}.json`, {
		method: "DELETE",
	})

	if (!response.ok) {
		throw new Error('Ошибка удаления')
	}

	return true
}

// запрос на изменение чек-бокса
export const toggleTaskApi = async (id: string, currentDone: boolean) => {
	const response = await fetch(`${url}tasks/${id}.json`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			done: !currentDone
		})
	})

	if (!response.ok) {
		throw new Error('Ошибка обновления')
	}

	const result = await response.json()
	return result
}

// запрос на изменение текста задачи

export const editTaskApi = async (id: string, text: string) => {
	const response = await fetch(`${url}tasks/${id}.json`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			text: text.trim()
		})
	})

	if (!response.ok) {
		throw new Error('Ошибка обновления')
	}

	const result = await response.json();
	return result
}