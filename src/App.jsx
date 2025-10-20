import { useState } from "react";

import QuizPage from "./pages/QuizPage/QuizPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <QuizPage />
    </div>
  );
}

export default App;
