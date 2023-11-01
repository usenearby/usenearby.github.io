import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeAlternative from "./pages/Home/HomeAlternative";
import './App.css';
import { HOME_ALTERNATIVE_ROUTE, HOME_ROUTE } from "./routeKeys";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />}></Route>
      <Route path={HOME_ALTERNATIVE_ROUTE} element={<HomeAlternative />}></Route>
    </Routes>
  );
}

export default App;
