import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeAlternative from "./pages/Home/HomeAlternative";
import './App.css';
import { HOME_ALTERNATIVE_ROUTE, HOME_ROUTE, PRIVACY_POLICY_ROUTE, TERMS_OF_USE_ROUTE } from "./routeKeys";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />}></Route>
      <Route path={HOME_ALTERNATIVE_ROUTE} element={<HomeAlternative />}></Route>
      <Route path={TERMS_OF_USE_ROUTE} element={<TermsOfUse />}></Route>
      <Route path={PRIVACY_POLICY_ROUTE} element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}

export default App;
