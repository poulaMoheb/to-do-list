import { create } from 'zustand';

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
    };
});