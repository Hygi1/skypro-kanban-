/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useCallback } from "react";
import { tasksAPI } from "../services/tasks";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await tasksAPI.getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Ошибка загрузки задач");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = async (taskData) => {
    try {
      setLoading(true);
      await tasksAPI.createTask(taskData);
      await fetchTasks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      setLoading(true);
      await tasksAPI.updateTask(id, taskData);
      await fetchTasks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setLoading(true);
      await tasksAPI.deleteTask(id);
      await fetchTasks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        error,
        fetchTasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
