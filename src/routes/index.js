import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importamos a PÁGINA principal do nosso quiz.
import QuizPage from "../features/quiz/pages/QuizPage";
// Futuramente, você pode importar outras páginas aqui, como LoginPage, HomePage, etc.

// Aqui definimos todas as rotas da nossa aplicação.
const router = createBrowserRouter([
  {
    // A rota raiz ("/") vai renderizar a nossa página do quiz.
    path: "/",
    element: <QuizPage />,
    // errorElement: <NotFoundPage />, // Você pode adicionar uma página de erro 404 aqui.
  },
  // Exemplo de como você adicionaria uma nova rota no futuro:
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);

// Criamos um componente que provê as rotas para a aplicação.
export function AppRoutes() {
    return <RouterProvider router={router} />;
}
