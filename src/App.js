import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* Error: A <Route> is only ever to be used as the child of <Routes> element 오류해결법 */}
      {/* https://stackoverflow.com/questions/69832748/error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element# 참고 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
