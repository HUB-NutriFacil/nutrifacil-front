// src/App.jsx
import { useState, useEffect } from "react";
import QuizPage from "./pages/QuizPage/QuizPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoadingDiet from "./pages/Load/LoadingDiet";
import PlanReady from "./pages/PlanReady/PlanReady";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedState = localStorage.getItem("quizFinished");
    return savedState === "true" ? "sales" : "quiz";
  });

  const handleFinishQuiz = () => {
    localStorage.removeItem("quizCurrentStep");
    localStorage.setItem("quizFinished", "true");
    setCurrentPage("sales");
  };

  // ============================================================
  // 🛠️ Painel Oculto — debugGo("sales"), debugGo("loading")...
  // ============================================================
  useEffect(() => {
    window.__setPage = setCurrentPage;

    window.debugGo = (page) => {
      console.log(`🔍 [debugGo] Mudando para: ${page}`);
      if (typeof window.__setPage === "function") {
        window.__setPage(page);
      } else {
        console.warn("⚠️ setPage não está acessível ainda.");
      }
    };
  }, []);

  return (
    <div className="App">
      {currentPage === "quiz" && <QuizPage onFinish={handleFinishQuiz} />}

      {currentPage === "sales" && (
        <SalesPage
          onRestartQuiz={() => setCurrentPage("quiz")}
          onGoToCheckout={() => setCurrentPage("checkout")}
        />
      )}

      {currentPage === "checkout" && (
        <CheckoutPage
          onBackToSales={() => setCurrentPage("sales")}
          onPaymentStart={() => setCurrentPage("loading")}
        />
      )}

      {currentPage === "loading" && (
        <LoadingDiet onReady={() => setCurrentPage("plan-ready")} />
      )}

      {currentPage === "plan-ready" && (
        <PlanReady onFinish={() => setCurrentPage("sales")} />
      )}
    </div>
  );
}

export default App;
