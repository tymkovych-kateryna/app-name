import React from "react";
import "./i18n";

import BoardContent from "./Components/BoardContent";
import Navbar from "./Components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="trello-container">
      <Navbar />
      <BoardContent />
    </div>
  );
}

export default App;
