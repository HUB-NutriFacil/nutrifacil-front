// src/App.jsx
import { Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage/QuizPage";
import SalesPage from "./pages/SalesPage/SalesPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoadingDiet from "./pages/Load/LoadingDiet";
import PlanReady from "./pages/PlanReady/PlanReady";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/loading" element={<LoadingDiet />} />
      <Route path="/plan-ready" element={<PlanReady />} />
    </Routes>
  );
}

export default App;
