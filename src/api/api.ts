import type { TasksPesponse } from "../types/types"

const url = "https://vue-with-http-6c4e8-default-rtdb.europe-west1.firebasedatabase.app/"

export const getTasks = (): Promise<TasksPesponse> => {
	const promise = fetch(`${url}tasks.json`).then(res => res.json())

	return promise
}