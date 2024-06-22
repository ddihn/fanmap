import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import List from "./pages/List";
import Community from "./pages/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
