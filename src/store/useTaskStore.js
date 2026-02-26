import { create } from 'zustand';
import { updateTask as apiUpdateTask, deleteTask as apiDeleteTask } from '../api/taskApi';

export const useTaskStore = create((set,get) => {
    let lastTasks = null;
    let lastSearch = null;
    let lastResult = null;

    const computeFiltered = () => {
        const { tasks, search } = get();
        if (lastResult && lastTasks === tasks && lastSearch === search) {
            return lastResult;
        }
        const result = tasks.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
        );
        lastTasks = tasks;
        lastSearch = search;
        lastResult = result;
        return result;
    };

    return {
        tasks: [],
        search: "",
        setTasks: (tasks) => set({ tasks }),
        setSearch: (query) => set({ search: query }),
        filteredTasks: computeFiltered,
        moveTask: async (id, newColumn) => {
            const { tasks } = get();
            const task = tasks.find(t => String(t.id) === String(id));
            if (!task) return;
            const updatedTask = { ...task, column: newColumn };
            set({ tasks: tasks.map(t => t.id === task.id ? updatedTask : t) });
            try {
                await apiUpdateTask(task.id, updatedTask);
            } catch (err) {
                set({ tasks });
                console.error('Failed to update task column:', err);
            }
        },
        deleteTask: async (id) => {
            const { tasks } = get();
            const original = tasks;
            set({ tasks: tasks.filter(t => String(t.id) !== String(id)) });
            try {
                await apiDeleteTask(id);
            } catch (err) {
                set({ tasks: original });
                console.error('Failed to delete task:', err);
            }
        },
    };
});