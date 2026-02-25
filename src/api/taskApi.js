import axios from "axios";

const API_BASE_URL = "http://localhost:4000/tasks";

export const fetchTasks = async (page,limit) => {
    const res = await axios.get(`${API_BASE_URL}_page=${page}&_limit=${limit}`);
    return res.data;
}

export const createTask = async (task) => {
    const res = await axios.post(API_BASE_URL, task);
    return res.data;
}

export const updateTask = async (id, updatedTask) => {
    const res = await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
    return res.data;
}

export const deleteTask = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
}

