import { create } from 'zustand';

export const useTaskStore = create((set,get) => ({
    tasks: [],
    search: "",
    setTasks: (tasks) => set({ tasks }),
    setSearch: (query) => set({ search: query }),
    filteredTasks: (() =>
        get().tasks.filter((task)=>
             task.title.toLowerCase().includes(get().search.toLowerCase()))),
}));