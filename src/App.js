import React from "react";
import Landing from "./components/Landing";
import Home from "./components/Home";
import NewGroup from "./components/NewGroup";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newgroup" element={<NewGroup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
