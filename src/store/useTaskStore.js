import { create } from 'zustand';

const useTaskStore = create((set) => ({
    tasks: [],
    search: "",
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (updatedTask) => set((state) => ({
        tasks: state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    }))
}));