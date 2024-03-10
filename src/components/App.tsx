import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import InventoryPage from "./pages/InventoryPage";
import ErrorPage from "./pages/ErrorPage";

import { INVENTORY_PAGE, ERROR_PAGE } from "../constants/page.constants";

import "../index.css";

import logo from "../images/logo.png";

const App: React.FC<AppProps> = () => {
  const pages: KeyValuePair<string, string>[] = [INVENTORY_PAGE];

  const inventoryPageComponent: JSX.Element = (
    <InventoryPage pageName={INVENTORY_PAGE.key} />
  );
  const errorPageComponent: JSX.Element = (
    <ErrorPage pageName={ERROR_PAGE.key} />
  );
  const navigationComponentToInventoryPage: JSX.Element = (
    <Navigate to={INVENTORY_PAGE.value} />
  );
  const navigationComponentToErrorPage: JSX.Element = (
    <Navigate to={ERROR_PAGE.value} />
  );

  return (
    <BrowserRouter>
      <Navbar image={logo} pages={pages} />
      <main className="container">
        <Routes>
          <Route path={INVENTORY_PAGE.value} element={inventoryPageComponent} />
          <Route path={ERROR_PAGE.value} element={errorPageComponent} />
          <Route path={"/"} element={navigationComponentToInventoryPage} />
          <Route path={"*"} element={navigationComponentToErrorPage} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
