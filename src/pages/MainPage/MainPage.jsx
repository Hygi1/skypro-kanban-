import { useState, useEffect, useMemo, useCallback } from "react";
import Header from "../../components/Header/Header";
import Column from "../../components/Column/Column";
import Modal from "../../components/Modal/Modal";
import CardDetails from "../../components/CardDetails/CardDetails";
import { useTasks } from "../../context/TasksContext";
import { useAuth } from "../../context/use-auth.jsx";
import {
  MainBlock,
  MainContent,
  MainColumn,
  Loading,
  ErrorMessage,
} from "./MainPage.styled";

const STATUSES = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const MainPage = () => {
  const { tasks, loading, error, fetchTasks } = useTasks();
  const { isLoggedIn } = useAuth();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [initialLoaded, setInitialLoaded] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !initialLoaded && !loading) {
      fetchTasks().finally(() => setInitialLoaded(true));
    }
  }, [isLoggedIn, initialLoaded, loading, fetchTasks]);

  const handleCardClick = useCallback(
    (cardId) => setSelectedCardId(cardId),
    []
  );
  const closeModal = useCallback(() => setSelectedCardId(null), []);

  const cardsByStatus = useMemo(() => {
    const map = {};
    STATUSES.forEach((status) => (map[status] = []));
    if (Array.isArray(tasks)) {
      tasks.forEach((task) => {
        const status = task?.status || "Без статуса";
        if (map[status]) map[status].push(task);
      });
    }
    return map;
  }, [tasks]);

  const transformTaskToCard = useCallback((task) => {
    if (!task) return null;
    let theme = "gray";
    if (task.topic === "Web Design") theme = "orange";
    if (task.topic === "Research") theme = "green";
    if (task.topic === "Copywriting") theme = "purple";

    return {
      id: task._id,
      title: task.title,
      category: task.topic,
      theme: theme,
      date: task.date ? new Date(task.date).toLocaleDateString("ru-RU") : "",
      status: task.status,
    };
  }, []);

  if (!isLoggedIn) return null;

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <MainBlock>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && tasks.length === 0 ? (
              <Loading>Загрузка задач...</Loading>
            ) : (
              <MainContent>
                {STATUSES.map((status) => (
                  <MainColumn key={status}>
                    <Column
                      title={status}
                      cards={
                        cardsByStatus[status]
                          ?.map(transformTaskToCard)
                          .filter(Boolean) || []
                      }
                      onCardClick={handleCardClick}
                    />
                  </MainColumn>
                ))}
              </MainContent>
            )}
          </MainBlock>
        </div>
      </main>
      {selectedCardId && (
        <Modal onClose={closeModal}>
          <CardDetails cardId={selectedCardId} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
