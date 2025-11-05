// src/App.jsx
import { useState } from "react";
import QuizPage from "./pages/QuizPage/QuizPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

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

  const handleRestartQuiz = () => {
    localStorage.removeItem("quizFinished");
    setCurrentPage("quiz");
  };

  return (
    <div className="App">
      {currentPage === "quiz" && <QuizPage onFinish={handleFinishQuiz} />}

      {currentPage === "sales" && (
        <SalesPage
          onRestartQuiz={handleRestartQuiz}
          onGoToCheckout={() => setCurrentPage("checkout")} 
        />
      )}

      {currentPage === "checkout" && (
        <CheckoutPage onBackToSales={() => setCurrentPage("sales")} />
      )}
    </div>
  );
}

export default App;

// 20/10/2025
// Adicionada navegação entre Quiz, Sales e Checkout pages.
// --------------------------------------------
// Controla o fluxo completo do usuário até o pagamento, sem reload.
// by: gabbu (github: gabriellesote)
