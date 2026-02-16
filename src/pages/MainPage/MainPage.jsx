import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Column from "../../components/Column/Column";
import { tasksAPI } from "../../services/tasks";
import { useAuth } from "../../context/use-auth.jsx";
import {
  MainBlock,
  MainContent,
  MainColumn,
  Loading,
  ErrorMessage,
} from "./MainPage.styled";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      fetchTasks();
    }
  }, [isLoggedIn]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await tasksAPI.getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message || "Не удалось загрузить задачи");
    } finally {
      setLoading(false);
    }
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const getCardsByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const transformTaskToCard = (task) => {
    let theme = "gray";
    if (task.topic === "Web Design") theme = "orange";
    if (task.topic === "Research") theme = "green";
    if (task.topic === "Copywriting") theme = "purple";

    return {
      id: task._id,
      title: task.title,
      category: task.topic,
      theme: theme,
      date: new Date(task.date).toLocaleDateString("ru-RU"),
      status: task.status,
    };
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <MainBlock>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading ? (
              <Loading>Загрузка задач...</Loading>
            ) : (
              <MainContent>
                {statuses.map((status) => (
                  <MainColumn key={status}>
                    <Column
                      title={status}
                      cards={getCardsByStatus(status).map(transformTaskToCard)}
                    />
                  </MainColumn>
                ))}
              </MainContent>
            )}
          </MainBlock>
        </div>
      </main>
    </>
  );
};

export default MainPage;
