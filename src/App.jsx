// src/App.jsx
import { useState } from "react";
import QuizPage from "./pages/QuizPage/QuizPage";
import SalesPage from "./pages/SalesPage/SalesPage"; // caminho ajustado

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("quizFinished") === "true" ? "sales" : "quiz";
  });

  const handleFinishQuiz = () => {
    // 🧹 Limpa dados de progresso
    localStorage.removeItem("quizCurrentStep");
    localStorage.setItem("quizFinished", "true");
    // Você pode deixar os dados do usuário (quizUserData) para exibir no SalesPage
    setCurrentPage("sales");
  };
  return (
    <div className="App">
      {currentPage === "quiz" && <QuizPage onFinish={handleFinishQuiz} />}
      {currentPage === "sales" && <SalesPage onRestartQuiz={() => setCurrentPage("quiz")} />
}
    </div>
  );
}

export default App;
