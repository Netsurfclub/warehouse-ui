import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import InventoryPage from "./pages/InventoryPage";
import ErrorPage from "./pages/ErrorPage";

import pages from "../constants/page.constants";

import "../index.css";

import logo from "../images/logo.png";

const App: React.FC<AppProps> = () => {
  const { MAIN_PAGE, INVENTORY_PAGE, ERROR_PAGE } = pages;

  return (
    <BrowserRouter>
      <Navbar
        image={logo}
        pages={[
          { name: MAIN_PAGE.name, path: MAIN_PAGE.path },
          { name: INVENTORY_PAGE.name, path: INVENTORY_PAGE.path },
        ]}
      />
      <main className="container">
        <Routes>
          <Route
            path={INVENTORY_PAGE.path}
            element={<InventoryPage pageName={INVENTORY_PAGE.name} />}
          />
          <Route
            path={ERROR_PAGE.path}
            element={<ErrorPage pageName={ERROR_PAGE.name} />}
          />
          <Route path={"/"} element={<Navigate to={INVENTORY_PAGE.path} />} />
          <Route path={"*"} element={<Navigate to={ERROR_PAGE.path} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
