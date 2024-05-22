import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import BookNow from "./pages/Book-Now/Book-Now.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/book-now" element={<BookNow />} />
    </Routes>
  );
}

window.App = App;

export default App;
