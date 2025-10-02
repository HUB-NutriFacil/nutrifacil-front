// ✨ REMOVEMOS: useState, HomePage, App.css, enviarUserDataParaPagamento

import React from 'react';

// 1. Importa os estilos globais da aplicação.
// Este arquivo agora contém as regras do seu antigo index.css.
import './assets/styles/global.css';

// 2. Importa o componente que gerencia todas as rotas da aplicação.
import { AppRoutes } from './routes';

/**
 * O componente App agora é extremamente simples.
 * Sua única responsabilidade é ser o ponto de entrada que renderiza
 * o sistema de rotas da aplicação. Toda a lógica do quiz foi
 * movida para a feature 'quiz'.
 */
function App() {
  return (
    // A classe 'App' pode ser usada para um container geral, se necessário.
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
