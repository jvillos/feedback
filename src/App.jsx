import { useState } from "react";
import "./App.css";
import FeedbackList from "./FeedbackList/FeedbackList";
import SelectedFeedbackDisplay from "./SelectedFeedbackDisplay/SelectedFeedbackDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Feedback emoji app</h1>
      <FeedbackList />
      <SelectedFeedbackDisplay />
    </div>
  );
}

export default App;
