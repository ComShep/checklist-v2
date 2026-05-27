import { create } from "zustand";
import type { FilterType, TasksList } from "../types/types";
import { addTaskApi, getTasksApi, toggleTaskApi } from "../api/api";
import { devtools } from "zustand/middleware";

interface TaskState {
  tasks: TasksList | null;
  filteredTasks: TasksList | null;
  activeFilter: FilterType;
}

interface TaskAction {
  loadData: () => void;
  setActiveFilter: (filterType: FilterType) => void;
  getFilteredTasks: () => void;
	checkTask: (id: string, currentDone: boolean) => void;
	addTask: (inputValue: string) => void;
}

type TaskStore = TaskState & TaskAction;

const useTasksStore = create<TaskStore>()(
  devtools(
    (set, get) => ({
      tasks: null,
      filteredTasks: null,
      activeFilter: "all",

      loadData: async () => {
        try {
          const data = await getTasksApi();
          const arrayOfData = Object.entries(data);
          const arrayOfTasks = arrayOfData.map(([id, task]) => ({
            id: id,
            ...task,
          }));
          set({ tasks: arrayOfTasks });
        } catch (error) {
          console.log(error);
        }
      },

      setActiveFilter: (filterType) => set({ activeFilter: filterType }),

      getFilteredTasks: () => {
        const { tasks, activeFilter } = get();

        if (!tasks) {
          set({ filteredTasks: null });
          return;
        }

        switch (activeFilter) {
          case "all":
            set({ filteredTasks: tasks });
            break;
          case "active":
            set({ filteredTasks: tasks.filter((task) => !task.done) });
            break;
          case "done":
            set({ filteredTasks: tasks.filter((task) => task.done) });
            break;
        }
      },

			addTask: async (inputValue) => {
				try {
					const newTask = await addTaskApi(inputValue);
					const { tasks } = get();
					set({ tasks: tasks ? [...tasks, newTask] : [newTask] });
				} catch (error) {
					console.log(error)
				}
			},
			
			checkTask: async (id, currentDone) => {
				const { tasks } = get();
				if (tasks === null) return;
				const prevTasks = [...tasks]
				try {
					await toggleTaskApi(id, currentDone);
					const changedTasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task );
					set({tasks: changedTasks})
				} catch (error) {
					console.log(error)
					set({tasks: prevTasks})
				}
			}
    }),
    { name: "TasksStore" },
  ),
);

export default useTasksStore;
