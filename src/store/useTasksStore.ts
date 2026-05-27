import { create } from "zustand";
import type { FilterType, TasksList } from "../types/types";
import { getTasksApi } from "../api/api";

interface TaskState {
  tasks: TasksList | null;
	filteredTasks: TasksList | null;
	activeFilter: FilterType
}

interface TaskAction {
	loadData: () => void,
	setActiveFilter: (filterType: 'all' | 'active' | 'done') => void,
	getFilteredTasks: () => void,
}

type TaskStore = TaskState & TaskAction;

const useTasksStore = create<TaskStore>((set, get) => ({
  tasks: null,
	filteredTasks: null,
	activeFilter: 'all',

  loadData: async () => {
    try {
      const data = await getTasksApi();
      const arrayOfData = Object.entries(data);
      const arrayOfTasks = arrayOfData.map(([id, task]) => ({
        id: id,
        ...task,
      }));
			set({tasks: arrayOfTasks})
    } catch (error) {
      console.log(error);
    }
  },

	setActiveFilter: (filterType) => set({activeFilter: filterType}),

	getFilteredTasks: () => {
		const {tasks, activeFilter} = get();

		if (!tasks) {
			set({filteredTasks: null})
			return
		}

		switch (activeFilter) {
			case "all":
				set({filteredTasks: tasks});
				break;
			case "active":
				set({filteredTasks: tasks.filter(task => !task.done)});
				break;
			case "done":
				set({filteredTasks: tasks.filter(task => task.done)});
				break;
		}
	}
}));

export default useTasksStore
